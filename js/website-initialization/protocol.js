var protocolJSON = ` [{
	"Id": "1",
	"Api": "Test Api",
	"SessionToken": "5c57c801-3988-45ba-ac36-bdc64cea438e",
	"Client": {
		"Id": "1",
		"Name": "Alexandre Santiago da Silva"
	},
	"System": {
		"Id": "1",
		"Name": "Inforlube Administrator"
	},
	"User": {
		"Id": "1",
		"Name": "Alex Silva",
		"AccountId": "918b3eae-2aac-4ff1-bb43-85eee9c7e651",
		"Email": "alex.santiago.mail@gmail.com"
	},
	"VehicleTypeId": 12,
	"Year": 2018,
	"BrandId": 4,
	"ModelId": 7,
	"FuelId": 14,
	"EngineId": 59,
	"CreatedAt": "2018-02-21T20:30:21.810Z",
	"ClosedAt": "2018-02-21T21:30:21.810Z",
	"Requests": [{
		"Api": "analytics",
		"Date": "2018-02-20T21:31:21.810Z",
		"IpAddress": "192.198.2.100",
		"ContentType": "text",
		"Uri": "all2sys.com/dev/Analytics/eventlog",
		"Method": "GET",
		"Headers": "{}",
		"Action": "{}",
		"Controller": "none",
		"WithError": true,
		"Response": {
			"Status": 500,
			"Content": "Error: service unavailable"
		}
	},
	{
		"Api": "analytics",
		"Date": "2018-02-20T21:31:11.810Z",
		"IpAddress": "192.198.2.100",
		"ContentType": "text",
		"Uri": "all2sys.com/dev/Analytics/eventlog",
		"Method": "GET",
		"Headers": "{}",
		"Action": "{}",
		"Controller": "none",
		"WithError": false,
		"Response": {
			"Status": 200,
			"Content": "{}"
		}
	}]
},
{
	"Id": "2",
	"Api": "Test Api",
	"SessionToken": "2435550e-34e5-4a40-b67a-49ea9733228f",
	"Client": {
		"Id": "2",
		"Name": "Cassio Vilela Tavares"
	},
	"System": {
		"Id": "2",
		"Name": "Inforlube Analytics"
	},
	"User": {
		"Id": "1",
		"Name": "Cassio V T",
		"AccountId": "cfd4da01-aafb-485b-ac09-c751e018cbc5",
		"Email": "cvt@gmail.com"
	},
	"VehicleTypeId": 12,
	"Year": 2015,
	"BrandId": 2,
	"ModelId": 4,
	"FuelId": 11,
	"EngineId": 9,
	"CreatedAt": "2018-02-19T20:30:21.810Z",
	"ClosedAt": "2018-02-19T31:30:21.810Z",
	"Requests": [{
		"Api": "analytics",
		"Date": "2018-02-19T20:30:51.810Z",
		"IpAddress": "162.198.20.1",
		"ContentType": "text",
		"Uri": "all2sys.com/dev/Analytics/cade",
		"Method": "POST",
		"Headers": "{}",
		"Action": "{}",
		"Controller": "none",
		"WithError": true,
		"Response": {
			"Status": 404,
			"Content": "Error: service not found"
		}
	}]
},
{
	"Id": "3",
	"Api": "Test Api",
	"SessionToken": "5c57c801-3988-45ba-ac36-bdc64cea438e",
	"Client": {
		"Id": "3",
		"Name": "Erica Paim Lemos"
	},
	"System": {
		"Id": "1",
		"Name": "Inforlube Administrator"
	},
	"User": {
		"Id": "3",
		"Name": "Erica Lemos",
		"AccountId": "bdc64cea-4ff1-4ff1-2aac-918b3eaee651",
		"Email": "erica.paim.lemos@gmail.com"
	},
	"VehicleTypeId": 34,
	"Year": 2017,
	"BrandId": 7,
	"ModelId": 9,
	"FuelId": 11,
	"EngineId": 9,
	"CreatedAt": "2018-02-22T21:30:21.810Z",
	"ClosedAt": "2018-02-23T22:30:21.810Z",
	"Requests": [{
		"Api": "analytics",
		"Date": "2018-02-20T22:31:21.810Z",
		"IpAddress": "196.188.22.100",
		"ContentType": "text/json",
		"Uri": "all2sys.com/dev/Analytics/eventlog",
		"Method": "GET",
		"Headers": "{}",
		"Action": "{}",
		"Controller": "none",
		"WithError": true,
		"Response": {
			"Status": 200,
			"Content": ""
		}
	}]
}] `;
// protocolJSON = '[]';
