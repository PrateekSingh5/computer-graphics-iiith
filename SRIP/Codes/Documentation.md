Documentation for SRIP PROJECT
 
 	PROJECT NAME - COMPUTER GRAPHICS 
	EXPERIMENT NAME - HIERARCHIAL TRANSFORMATION

Introduction: 

This experiment is designed to teach how the scaling transformation works when applied to traingles and co-ordinate systems.

Canvas 
	The Canvas displays the geometry loaded by the application. It allows to view the geometry and their relative coordinate systems from different angles. It also supports navigation through the scene and modification of the vertices.

	 Scroll the mouse wheel to zoom in or out of the scene. Rotate the view by dragging the mouse with the right button pressed.
	  Disable Lock vertices option in Display tab to move selected vertices with left mouse button. 

Display Tab
     The display tab provides configurable settings for the UI and navigation.

3D 
	 Enable/Disable 3D view in canvas.

Lock vertices 
	 Enable to use left mouse button to pan through the scene in the canvas. 
	 Disable to allow editing vertices by moving them around in the canvas using left mouse button.

Show animation 
	Enable to allow animation in the scene using the animation slider at the bottom.
	Disable to make the scene static with no animation even with slider.

 Transform coordinate systems 
 	 Enable to show the transformations to the coordinate system with the geometry fixed in place.
 	 Disable to transform the geometry with the coordinate system fixed.

Draw XY grid 
	Enable to display the grid in XY plane 

Draw YZ grid 
	Enable to display the grid in YZ plane 

Draw ZX grid 
	Enable to display the grid in XZ plane 

Reset View 
	Reset the view of the scene in the canvas to the initial camera settings. 

World Tab 
	The world tab has three sections.
	 1.Theory space
	 2.Hierarchical structure display
	 3.Vertex info display. 

	 Theory Space 
	 	The Theory space provides the theory required for the current experiment and guides through the experiment with hands on experience.
	 	Use the next and previous links to browse through theory and guide.

	 Hierarchical structure display 
	 	 This section displays the different cameras and instances created in the scene and the entire hierarchical structure under the world title.
	 	 Each node in the hierarchical structure is called an instance.
	 	 Each instance in the hierarchical structure is shown as a node under the world title.
	 	 The final instance in the list of instances under world title is the complete hierarchical model.
	 	 An instance consists of three sections and two options. 
	 	 	• Coordinate system 
	 	 		This is the local coordinate system of the instance relative to the parent instance.
	 	 		The editable options in the coordinate system are
	 	 		• X-axis, Y-axis, Z-axis 
	 	 			Axis vectors for the corresponding axis.
	 	 		• Origin 
	 	 			Location of origin for this coordinate system. 
	 	 			The three axis vectors above emerge from the origin. 
	 	 		• Axes size 
	 	 			Length of axes displayed 
	 	 		• Show units 
	 	 			Enable to display the units when tracking a vertex of the current instance.

	 	 	• Draw 
 	 	 		Enable/Disable the visibility of the coordinate system in the canvas. 

 	 	 	• Shape / Instance 
 	 	 		These could be shapes if the current instance is a leaf node or other instances if the current instance is an intermediate node or could be a set of shapes and instances. 
	 	 	 		• Shapes have Vertices which can be edited and the tracking enabled/disabled for each individual vertex.
	 	 	 		 Any vertex can be selected by clicking on it. 
	 	 	 		 Shapes could also have Triangles which is a list of triplets each representing a triangle with the values of the triplets being indices of vertices that form the triangle. 
	 	 	 		 These again can be edited by clicking on any value.
	 	 	 		 • Instance is again a new node with all the features explained here. 

	 	 	 • Transformation 
	 	 	 	This has a list of transformations applied to the shapes and instances above in the local coordinate system. The order of transformation can be modified. More transformations can be added, edited or deleted. The duration setting for each transformation is the number of frames in which the transformation is animated from the frame specified as start frame.

	 	 	  • Translate 
					It does a translation of the above mentioned shapes and instances in the local coordinate system.
	 	 	   		This could be animated from no translation to the specified translation. 

	 	 	   • Rotation
	 	 	   		It does a rotation of the shapes and instances about the specified axis or any custom vector by the specified angle in the local coordinate system.
	 	 	   		 This could be animated from zero rotation angle to the specified rotation angle.

	 	 	    • Scale 
	 	 	    	It does a scaling on the shapes and instances by the specified ratio along the specified axis in the local coordinate system.
	 	 	    	This could be animated from zero scale to the specified scale. 

	 	 	    • Animation 
	 	 	    	Animation of each transformation could be set by specifying the number of frames over which the animation is done in the duration input.
	 	 	    	Starting frame for the animation can be specified in the Starting frame input in the transformation window.

	 	 	    • Order of the transformation 
	 	 	    	It can be modified by selecting the transformation and clicking the move up button in the window showing the list of transformations.

	 	 	     • Active 
	 	 	     	This option specifies whether the current instance is highlighted in the canvas. 

	 	 	     • Draw 
	 	 	     	To Enable/Disable the visibility of the current instance (along with the child instances) in the canvas. 

	 	 	     Camera 
	 	 	     	It is another node type under the world title.
	 	 	     	This provides the settings of the camera placed in the scene. 

	 	 	     • Type - Toggle between Orthographic or Perspective camera. 

	 	 	     • Near, Far, Bottom, Top, Left, Right
	 	 	     	Frustum parameters (clip planes) for the selected camera type. 

	 	• Transformation 
 	     	List of transformations applied to the camera.
 	     	This is similar to the transformation section in the Instance. 

	 	• Coordinate System 
	 		Local coordinate system of the camera. 
	 		This is similar to the coordinate system section in the Instance. 
	 		The camera is always placed at Origin looking in the direction of negative z-axis. 
	 		• Show View 
	 			Toggle camera view in a new window. 
	 		• Switch Axis to Camera 
	 			Align the world coordinate system to the camera coordinate system and show the transformations of the models wrt the cameraʼs coordinate system in the canvas.
	 			By default Global coordinate system is selected under world title. 
	 			Global coordinate system is an option provided under the world title. 
	 			This is selected by default. 
	 			The world coordinate system is aligned to the global coordinate system in the canvas. 
	 			The global coordinate system is always fixed, orthogonal and cannot be modified. 

	 		The buttons in the Hierarchical structure display section provide ways to add New instances, Edit any selected feature, Delete a node and Add a camera to the scene.
	 		Each of these buttons open a new window where the parameters for the corresponding node are entered. 
	 		Vertex Info Display This section displays the homogeneous and normalized absolute coordinates of the vertex selected. 
	 		The absolute coordinates are always in the global coordinate system. 
	 		Note that the coordinate system of the top level node in the hierarchical structure is relative to a fixed global coordinate system. 

	 		Animation Slider 
	 			The Animation Slider resides at the bottom of the experiment window. 
	 			Slide it to view any animation provided in the model . 
	 			The animation can be seen only if the Show animation option is enabled in the display tab. 



