## navigator
getCurrentRoutes() - 获取当前栈里的路由，也就是push进来，没有pop掉的那些  
jumpBack() - 跳回之前的路由，当然前提是保留现在的，还可以再跳回来，会给你保留原样。  
jumpForward() - 上一个方法不是调到之前的路由了么，用这个跳回来就好了  
jumpTo(route) - Transition to an existing scene without unmounting  
push(route) - Navigate forward to a new scene, squashing any scenes that you could   jumpForward to    
pop() - Transition back and unmount the current scene  
replace(route) - Replace the current scene with a new route  
replaceAtIndex(route, index) - Replace a scene as specified by an index  
replacePrevious(route) - Replace the previous scene  
immediatelyResetRouteStack(routeStack) - Reset every scene with an array of routes  
popToRoute(route) - Pop to a particular scene, as specified by its route. All scenes after it   will be unmounted  
popToTop() - Pop to the first scene in the stack, unmounting every other scene  
