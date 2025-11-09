# 1. Definition

Props (short for properties) are inputs to a React component that allow data to be passed from a parent component to a child component. Props are read-only, making components reusable and configurable.

# 2. Why use props?

To pass data between components.

To make components dynamic and flexible.

To separate concerns, keeping components reusable.

To allow communication from parent to child in the component hierarchy.

# 3. Benefits of props

Reusability: Components can be reused with different data.

Maintainability: Changes in data don’t require changing the component logic.

Readability: Clear data flow from parent to child.

Flexibility: Supports passing simple data, objects, arrays, or functions.

# 4. Key Points / Others

Props are immutable; children cannot modify them.

Props can hold any type of data: string, number, object, array, or function.

Props enable composition of components for scalable applications.

For dynamic behavior inside a component, state is used instead of props.

Using props helps follow React’s one-way data flow principle.