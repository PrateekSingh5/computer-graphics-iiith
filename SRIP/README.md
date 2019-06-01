# SRIP2019-Batch1
This is the readme file 


Status update:
1.The current file shows the functioning of a js code which has a background with grids 
2.Soon it will be updated with a sample figure and a dynamic working transformation module.Here in this experiment We need to select the coordinate system , Hierarchical Transformations


1.Introduction to the interface :


		This experiment is designed to teach how a sequence of transformations work when applied to a geometry.

		The world represented as a tree is shown below. Each node is an instance. Each instance has 3 sections: Coodinate system, shape/instance, Transformation. Coordinate system is the local coordinate system of the instance. Shape/Instance is the geometry or a child instance of the cuurent instance. Transformation is the set of transformations applied to the shape or instance wrt local coordinate system.

		All the values being shown can be edited by clicking on them. Any changes to the tree are reflected on the display and vice-versa.

		These instructions are in a series of steps. Use the Next and Previous buttons to navigate.


2. 2D-demo :

		This experiment shows the effect of a series of transformations applied on a triangle.

		We start with a scaling transformation applied to the triangle followed by a translation, rotation and another translation. All these transformations are animated.

		Drag the slider at the bottom to go forwards or backwards in the animation.

		The order of transformations can be edited from the transformation edit panel. New transformations could be added as well as edited. Double click on Transformation 1, followed by the corresponding transformation to view the details of the transformation applied. Note that transformations about z axis will be visible only if you check the 3D box under Display tab before proceeding.

3.Order of Trasnformations :

		The order of transformations is always important to acheive the proper transformation. A translation followed by rotation is not the same as rotation followed by translation. Similarly, scaling followed by translation is not the same as translation followed by scaling. However, rotation and scaling can be used in any order resulting in the same transformation.

		This experiment shows a scaling transformation applied to the triangle followed by a translation, rotation and another translation. All these transformations are animated.

		Select Transformation 1 and click Edit button to open the transformation edit panel. The order of transformations can be edited from this transformation edit panel. New transformations could be added as well as edited. Select a tranformation and Use the up and down arrowed buttons to change the order of the transformation. Note that transformations about z axis will be visible only if you check the 3D box under Display tab before proceeding.


4.Adding more Trasnformations :

		More transformations can be added, edited or deleted for the current instance. The order of these transformations determines the final transformation of the instance.

		Select Transformation 1 and click Edit button to open the transformation edit panel. Transformations can be added, edited, deleted and ordered here. To Add a new transformation click Add to open the add transformation panel. Select the respective transformation to be applied and provide the required parameters. Set the Duration value to the number of frames over which this transformation is animated. Click OK to add this transformation to the list. A Custom transformation can be applied by specifying a custom tranformation matrix in the fields provided. Set the Starting Frame to the specify the frame from which these transformations are applied.

		Select a transformation and use Edit to edit an existing transformation and Delete to delete one. Select a tranformation and Use the up and down arrowed buttons to change the order of the transformation. Click Done to apply the transformations or close this panel to cancel the changes. Note that transformations about z axis will be visible only if you check the 3D box under Display tab before proceeding.


