#include <iostream>
#include <stdio.h>

//int x = 5;
 
int calcula(int x) {

		if (x > 1) {
			int a = x - 1;
			return x * calcula(a);
		}
		else {
			
		return 1;
	}
}


int main() {

	
int res = calcula(5);
printf("Valor da funcao e = %d \n", res);

return 0;
}





