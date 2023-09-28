package main

func Fibonacci() func() int {
	a := 0
	b := 1

	return func() int {
		c := a
		a, b = b, a+b
		return c
	}
}
