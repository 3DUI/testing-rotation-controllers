# Tasks

Here we describe the interface as a whole, along with how to complete each task.

## Training and Evaluation

To give you time to familiarise yourself with the controller, you will be given three minutes training time before the evaluation begins. Here, you will do the training tasks until the timer finishes, with the tasks looping if you finish all of them in the allotted time. During the actual evaluation, you will be given no time limit and will be asked to complete 12 tasks. Please complete these tasks as quickly and accurately as you can. 

Training will always preceed an evaluation. The stage you are in will always be shown at the top of the page, along with the controller and the number of tasks you have left.

## Interface

![Experiment Interface](images/interface.png)

The experiment interface has a number of elements to help you figure out what's going on. We outline each of them separately below. 

1. __Title__: The title gives you the current stage (Training), the current controller you are testing (Discrete Sliders controller), along with how many tasks you have left (we are on task 1 of 11).
2. __Instructions__: This section gives you instructions for how to complete the current task. Here we doing an _Orientation Task_ where we have to rotate an object to match the orientation of another object. 
3. __Time Left__: (only present for training) This is a timer showing the time left for the current stage.
4. __3D Views__: This section contains the 3D rendered scenes. This view depends on the type of task being completed, and the rotation controller being used.
5. __Reference Orientation__: See the section on Orientation Tasks below.
6. __Model to Rotate__: See the section on Orientation Tasks below.
7. __Reset Model Orientation__: Reset the orientation of your model to its starting orientation. 
8. __Submit Task__:  Once you have completed the task, submit the task and start the next one.

## Orientation Matching

![Orientation Tasks](images/orientation_task.png)

Orientation matching tasks involve you rotating a model to match the orientation of another model. You will be presented with two views:

- __Reference Orientation__: This is the orientation that you want to manipulate your model to match.
- __Model to Rotate__: This is the model you will be rotating to match the _Reference Orientation's_ model.

Once the _Model to Rotate_ is aligned the same as the _Reference Orientation_ model, you should submit the task.

## Inspection

![Inspection Tasks](images/inspection_task.png)

Inspection matching tasks involve you trying to find a particular symbol on a side of the model you're rotating: the side containing only the letter "i". Here, there is only one screen: __Model to Rotate__. 

You must rotate this model until you find the side containing only the symbol "i". Once you have, you must position the center of the controller, marked with a small red circle, on the dot of the "i" as shown above. After encircling the dot of the "i", you should submit the task.

Do not worry about the orientation of the "i", it can be upside down or any angle. You just need to ensure that the red circle is over its dot. 

__NOTE__: You're not looking for any "i", but specifically the side containing only an "i". 
