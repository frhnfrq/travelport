module.exports = `
<!--Release 8.1-->
<!--Version Dated as of 15/Apr/2015 11:24:06-->
<!--Air Pricing For Galileo({{provider}}) with LFS CheckFlightDetails Request-->
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Header/>
    <soap:Body>
        <air:AirPriceReq
            AuthorizedBy="user" CheckFlightDetails="true" TargetBranch="{{TargetBranch}}"
            TraceId="{{requestId}}"
            FareRuleType="short"
            xmlns:air="http://www.travelport.com/schema/air_v52_0"
            xmlns:com="http://www.travelport.com/schema/common_v52_0">
            <com:BillingPointOfSaleInfo OriginApplication="UAPI" xmlns:com="http://www.travelport.com/schema/common_v52_0"/>
            <air:AirItinerary>
              
            {{#processedSegments}}
                <air:AirSegment
                    {{#each this}}
                    {{#if (and 
                        (ne @key "children")
                        (ne @key "bookingClass")
                        (ne @key "transfer")
                    )
                    }}
                        {{@key}}="{{{this}}}" 
                    {{/if}}
                    {{/each}}>{{#children}}{{{this}}}
                    {{/children}}
                </air:AirSegment>
            {{/processedSegments}}

            </air:AirItinerary>
            {{#if platingCarrier}}
              <air:AirPricingModifiers PlatingCarrier="{{platingCarrier}}" InventoryRequestType="DirectAccess"/>
            {{/if}}

            {{#passengers}}
            <com:SearchPassenger BookingTravelerRef="{{ref}}" Code="{{ageCategory}}" Age="{{Age}}" xmlns:com="http://www.travelport.com/schema/common_v52_0" />
            {{/passengers}}
            <air:AirPricingCommand>
                {{#pricingCommands}}
                <air:AirSegmentPricingModifiers AirSegmentRef="{{{Key}}}">
                {{#if bookingClass}}
                    <air:PermittedBookingCodes>
                            <air:BookingCode Code="{{bookingClass}}" />
                    </air:PermittedBookingCodes>
                {{/if}}
                </air:AirSegmentPricingModifiers>
                {{/pricingCommands}}
            </air:AirPricingCommand>
            {{#if emulatePcc}}
            <air:PCC>
                <com:OverridePCC ProviderCode="{{provider}}" PseudoCityCode="{{emulatePcc}}"/>
            </air:PCC>
            {{/if}}
        </air:AirPriceReq>
    </soap:Body>
</soap:Envelope>
`;
