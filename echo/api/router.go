package api

import (
	"app/handler"

	"github.com/labstack/echo/v4"
)

func DefineRoutes(e *echo.Echo) {
	e.GET("/status", handler.StatusAlive)
}