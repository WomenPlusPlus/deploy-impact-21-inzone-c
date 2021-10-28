
# InZone C Education App

InZone helps refugees to get better education.

Let's deep dive to the app.
## Run On Your PC

Clone the project to current directory.

```bash
  git clone https://github.com/WomenPlusPlus/deploy-impact-21-inzone-c.git .
```

Change directory.

```bash
  cd client-inzone
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




## Authors

- [@giadafallo](https://github.com/GiadaFallo) -> Giada Fallo -> Project Management
- [@ogimgio](https://github.com/ogimgio) -> Gioele Monopoli -> Frontend Lead
- [@paradyo](https://github.com/paradyo) -> Emrecan Özkan -> Full Stack Developer
