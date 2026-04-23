


type Funky = <T>(...args: T[]) =>  { x: number; y: number; };

function overload(funcA: Funky, funcB: Funky): Funky {
    throw new Error('q');
	// throws a TypeError if both functions have the same number of parameters, otherwise
	// returns a function that
	//    - when called with n parameters, forwards the call to function_with_n_parameters,
	//    - when called with m parameters, forwards the call to function_with_m_parameters,
	//    - when called otherwise, throws a TypeError
	// (hint: every function has a length property that returns the number of formal parameters in the definition of that function)
}

const createVector = overload(
  function (a: number, b: number) {
    return { x: a,  y: b };
  },
  function (length: number) {
    return { x: length / 1.414,  y: length / 1.414 };
  }
);

createVector(3, 4);  // => { x: 3,  y: 4 }
createVector(7.07);   // => { x: 5,  y: 5 }