# node store RESTful service

## setup

Run

```npm i```

If you don't have MongoDB installed on your local machine, go [here](https://docs.mongodb.com/manual/installation/) and install it

To import the database in Mongo, run (in the folder where you dowloaded the files)

```mongorestore -d node-store NodeStore```

Don't forget to change the .env file with your local database connexion informations.

Then, run mongod and you're good to go !

## endpoints

All requests bodys shall be formatted in JSON.

### __Store__

GET

* `/api/store/`

lookup a store by parameters, by passing the store parameters in the request body, like so

```json
{
	"name":"awesome-store"
}
```

POST

* `/api/store/`

create a store
```json
{
	"name":"awesome-store",
	"address":"21 baker street"
}
```

PUT

* `/api/store/:name`

update a specific store, or create it if it doesn't exist

### __Orders__

GET

* `/api/order/`

lookup an order by parameters

```json
{
    "address":"21 baker street"
}
```

POST

* `/api/order/`

create an order by inserting the following query

```json
{
	"address":"1 whatever street",
	"confirmationDate": "2018-01-01",
	"status":"on hold",
	"items":[
		{
			"description":"grosse bite",
			"unit price":25,
			"quantity": 2
		}
	]
}
```

### __Payments__

POST

* `/api/order/`

create a payment for an order by querying it in the 'for' property of your JSON query and specify infos in the 'infos' property

```json
{
	"for": {
	"_id":"5cf0506d1ae6bb18d04068f2"
	},
	"infos": {
		"status": "lol",
		"creditCardNumber": 5655665,
		"paymentDate": "2018-05-05"
	}
}
```