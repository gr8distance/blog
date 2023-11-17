package main

import (
	"app/api"
	"fmt"

	"github.com/labstack/echo/v4"
)

func main() {
	fmt.Println("Hello World")
	e := echo.New()

	api.DefineRoutes(e)
	e.Logger.Fatal(e.Start(":8000"))
}
