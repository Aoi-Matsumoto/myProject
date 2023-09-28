package main

import "strings"

func WordCount(s string) map[string]int {

	m := strings.Fields(s)

	p := map[string]int{}

	for _, val := range m {

		if _, ok := p[val]; !ok {

			p[val] = 1

		} else {

			p[val] += 1

		}

	}

	return p

}
