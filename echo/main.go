package main

import (
	"app/api"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()
	api.DefineRoutes(e)
	e.Logger.Fatal(e.Start(":8000"))
}
