#include <iostream>

#include <stdio.h>

int main() {

int a = 0, x = 0;

	for (int i = 0; i < 10; i++) {
	
		while (x < 5) {
			x = x + 1;
			a = a + 1;
		}
		x= 0;
	}
	
	printf("Valor de a = %d \n", a);
	
return 0;
}
