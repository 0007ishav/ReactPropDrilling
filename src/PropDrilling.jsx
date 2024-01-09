//without_useContext.js

// Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements 
// in the final level. Here is a diagram to demonstrate it better. Data needed to be sent from Parent to ChildC.



import React, { useState } from "react";

function Parent() {
	const [fName, setfName] = useState("firstName");
	const [lName, setlName] = useState("LastName");
	return (
		<>
			<div>This is a Parent component</div>
			<br />
			<ChildA fName={fName} lName={lName} />
		</>
	);
}

function ChildA({ fName, lName }) {
	return (
		<>
			This is ChildA Component.
			<br />
			<ChildB fName={fName} lName={lName} />
		</>
	);
}

function ChildB({ fName, lName }) {
	return (
		<>
			This is ChildB Component.
			<br />
			<ChildC fName={fName} lName={lName} />
		</>
	);
}

function ChildC({ fName, lName }) {
	return (
		<>
			This is ChildC component.
			<br />
			<h3> Data from Parent component is as follows:</h3>
			<h4>{fName}</h4>
			<h4>{lName}</h4>
		</>
	);
}

export default Parent;


// Why not to use prop drilling?
// Code Complexity: As components grow, prop drilling increases code complexity as it is difficult to track the flow of data through various components.
// Reduced Maintainability: It will become very challenging to maintain the code with prop drilling. When changes are required in the data flow, you need to make changes in many components.
// Performance Overhead: We have to pass props through unnecessary intermediary components which can impact performance.
// Decreased Component Reusability: Components used in prop drilling become tightly coupled to the structure of the parent components, so it very difficult to use it on other parts of the application.
// Increased Development Time: Prop drilling often requires additional planning to implement. This can slow down the development process, especially when the component hierarchies is complex.


// Solve prop drilling with UseContext Hooks
// The problem with Prop Drilling is that whenever data from the Parent component will be needed, it would have to come from each level, Regardless of the fact that it is not needed there and simply needed in last.

// A better alternative to this is using useContext hook. The useContext hook is based on Context API and works on the mechanism of Provider and Consumer. Provider needs to wrap components inside Provider Components in which data have to be consumed. Then in those components, using the useContext hook that data needs to be consumed.

//with_useContext.js

// import React, { useState, useContext } from "react";

// let context = React.createContext(null);
// function Parent() {
// 	const [fName, setfName] = useState("firstName");
// 	const [lName, setlName] = useState("LastName");
// 	return (
// 		<context.Provider value={{ fName, lName }}>
// 			<div>This is a Parent component</div>
// 			<br />
// 			<ChildA />
// 		</context.Provider>
// 	);
// }

// function ChildA() {
// 	return (
// 		<>
// 			This is ChildA Component.
// 			<br />
// 			<ChildB />
// 		</>
// 	);
// }

// function ChildB() {
// 	return (
// 		<>
// 			This is ChildB Component.
// 			<br />
// 			<ChildC />
// 		</>
// 	);
// }

// function ChildC() {
// 	const { fName, lName } = useContext(context);
// 	return (
// 		<>
// 			This is ChildC component.
// 			<br />
// 			<h3> Data from Parent component is as follows:</h3>
// 			<h4>{fName}</h4>
// 			<h4>{lName}</h4>
// 		</>
// 	);
// }

// export default Parent;
