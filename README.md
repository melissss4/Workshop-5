# Workshop-5

Objective:
Produce a 'data self-portrait' in a p5.js sketch by making a visualisation that shows something about yourself from a dataset. Use a csv file to store the dataset.
Experiment with different ways to present the data, e.g. using text, images, shapes, or colours.


Current Sketch: [https://melissss4.github.io/Workshop-5/ ](https://melissss4.github.io/Workshop-5/) 


Before beginning this workshop I went through this website for more information about p5.js coding https://thecodingtrain.com/tracks/code-programming-with-p5-js 
I began with making my excel file and then searching for transparent images to use for my later input. I had to change a few of the images to PNG since they were avif images. 

![Screen Shot 2025-01-22 at 1 36 34 PM](https://github.com/user-attachments/assets/0dfa86af-1a93-4545-a764-d6399ba6706b)
![Screen Shot 2025-01-22 at 1 36 49 PM](https://github.com/user-attachments/assets/5d36f7dd-abdb-46e9-ba88-3d2db898f0a0)


After this I began to write my code. 
Some of the aspects from the workshop that I liked were the images stacked on top of each other to look like a bar graph but without the bar and instead with the images acting as a visualiser. 
I wanted to do this with multiple images and then add in a slider to reveal the days and their data as you slide it. 

I figured I needed to merge the code of the loadImage functions and the createTable function.
I came to this code

![Screen Shot 2025-01-22 at 1 37 07 PM](https://github.com/user-attachments/assets/301512c7-8740-42cd-aaa9-df939ca67360)


I had an issue with this where, once again, my images were not loading, even though I was sure I got the wording exact. I took a few breaks through the night, coming back to it, tweaking the wording and trying to run it again, but I kept getting the same message. 

I noticed I left in the “Vehicles/’miata.png”); little colon before a couple of the image names so I removed them and the table produced.

![Screen Shot 2025-01-22 at 1 37 26 PM](https://github.com/user-attachments/assets/dcdc952f-0fac-4032-bb81-dd9f53eca64c)

I felt like my code was getting a bit too long so I googled how to shorten code with a lot of ‘if’ statements, and I found out I could use ternary’s. I found this website https://www.geeksforgeeks.org/javascript-ternary-operator/ explaining how they work and this website https://processing.org/reference/conditional.html explaining in more detail and with examples. I then tried to incorporate them into my code to shorten it and have less ‘if’ statements since I was starting to mix mine up. 

I noticed after I added these the miata was not showing up on the Friday line, so I looked into that and noticed that I forgot to add it into the CSV file. 

![Screen Shot 2025-01-22 at 1 39 29 PM](https://github.com/user-attachments/assets/d32db9df-1b0d-4f35-ad6e-cf4cee38e944)


I then added it and re-uploaded this into my code and it worked. 

![Screen Shot 2025-01-22 at 1 39 46 PM](https://github.com/user-attachments/assets/9e3b272c-69d6-48bd-bd9c-90928de6852c)


![Screen Shot 2025-01-22 at 1 37 50 PM](https://github.com/user-attachments/assets/1926a2a3-ac64-482c-9843-855aed660bb5)



Now I wanted to add in the slider to reveal the days. For this, from the previous workshop I already knew how to make a slider. I just wanted to use it to reveal each day. For this I searched a few sources. I used this video on youtube https://www.youtube.com/watch?v=cCNi-ltCgNM and then this p5.js store https://editor.p5js.org/aferriss/sketches/ryBzOKMQm as well as asking some different friends with more coding experience to look at my progress and tell me if I was on the right track. I ended up being able to create my current code, and it turned out how I wanted. 

