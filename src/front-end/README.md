
# InZone C Education App

InZone helps refugees to get better education.

Let's deep dive to the app.

## InZone C Parse Server Credentials

* PARSE_DASHBOARD_URL: https://inzone-c-parse-dashboard.tools.deployimpact.ch/
* PARSE_API_URL:  https://inzone-c-parse.tools.deployimpact.ch/parse
* PARSE_USER: caprover
* PARSE_PWD: 54dDc6pmG2eKJE
* PARSE_MASTER_KEY: Nyv7VVbTC4LCvGnLpvAL2hSBrY9Lxf7j
* PARSE_APPID: inzonec

## Run On Your PC

Clone the project to current directory.

```bash
  git clone https://github.com/WomenPlusPlus/deploy-impact-21-inzone-c.git .
```

Install dependencies.

```bash
  npm install
```

RUN!

```bash
  npm start
```


## API Reference
* https://inzone-c-parse.tools.deployimpact.ch/parse is the base url.

* All requests include a header that is "X-Parse-Application-Id: inzonec"

* Some requests include a header that is "X-Parse-Session-Token: tokenWhenUserLoggedInorSignedUp"

* Example student info: username=giada&password=giada123

* Example coordinator info: username=emrecan&password=emrecan123

#### User Login

```http
  POST /users?username=inzonec&password=inzonecisbest
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Username of user. |
| `password` | `string` | **Required**. Password of user. |

#### Get All Exams Related to User (Student) (With RefugeeCamp Option)

```http
  GET /classes/Exam?where={"$or":[{"examLocation":{"__type":"Pointer","className":"RefugeeCamp","objectId":"REFUGEECAMPOBJECTIDWILLBEHERE"}},{"examLocation":null}]}&include=examLocation&include=createdBy
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `objectId` | `string` | **Required**. RefugeeCampId of user. |

#### Get MCQ Questions of an Exam

```http
  GET https://inzone-c-parse.tools.deployimpact.ch/parse/classes/MultipleChoiceQuestion?where={"examId":{"__type":"Pointer","className":"Exam","objectId":"EXAMOBJECTIDWILLBEHERE"}}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `objectId` | `string` | **Required**. ObjectId of an exam. |




## Authors

- [@giadafallo](https://github.com/GiadaFallo) -> Giada Fallo -> Project Management
- [@ogimgio](https://github.com/ogimgio) -> Gioele Monopoli -> Frontend Developer
- [@paradyo](https://github.com/paradyo) -> Emrecan Özkan -> Full Stack Developer
