//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="You were really cooking with this one!"
compliments[1]="That was a sigma answer, nice work!"
compliments[2]="Amazing job!"
compliments[3]="Perfection!"



/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="Which of the following sentences is a sentence fragment?"
choice1[1]="Melanie and Bryanna went to the store."
choice1[2]="Joel particpated in class five times."
choice1[3]="Eviana chose answer C, but Devani chose answer E."
choice1[4]="Iyad at the park."

question[2]="Which of the following sentences is a run-on sentence?"
choice2[1]="Carola read the story Camila answered the question."
choice2[2]="Aysen and Briana worked together on their math problems."
choice2[3]="Kaleiwahi grabbed his books, and Elijah made sure they both had their supplies."
choice2[4]="Phileah checked her table group's laptops to ensure they were all on the right spot."

question[3]="What type of sentence is this: Esther shared first, and Schwinzer agreed with her."
choice3[1]="Sentence Fragment"
choice3[2]="Question"
choice3[3]="Compound Sentence"
choice3[4]="Exclamation"

question[4]="What conjuction is the best option for the following sentence: Bella worked on her centers, ___ Alyssa worked with her."
choice4[1]="and"
choice4[2]="but"
choice4[3]="or"
choice4[4]="so"

question[5]="Which of the following sentences is a compound sentence?"
choice5[1]="Isabella toward the finish line."
choice5[2]="Aiden laughed at the limerick."
choice5[3]="Joner worked on his learning check, and Imaan show Ms. McDermott her correct answer."
choice5[4]="Dante talked with his table group but Nayeli had finished sharing."

question[6]="How can I correct this sentence fragment: Deborah on her math homework."
choice6[1]="No change needed"
choice6[2]="Make the subject plural"
choice6[3]="Add the verb worked"
choice6[4]="Change the punctuation to an exclamation point"

question[7]="Which of the following sentences is a run-on sentence?"
choice7[1]="Emerson got an 80% on his reading homework, and Rayana got an 80% too."
choice7[2]="Camila worked hard in class."
choice7[3]="Davi participated three times Arthur participated five times."
choice7[4]="Lejla hugged Minnie Mouse."

question[8]="Which of the following sentences is a complete thought, not a run-on sentence or sentence fragment?"
choice8[1]="Grace worked with Lyric Dominic worked alone."
choice8[2]="Kristie completed the science worksheet and turned it in."
choice8[3]="Ayden Ms. McDermott if he could have extra time for his homework."
choice8[4]="Sosaia and Luis were partners for writing but in math they worked with Jorge too."

question[9]="How can I correct this run-on sentence: Jake worked hard in math he participated in reading."
choice9[1]="No change needed"
choice9[2]="Add a comma and the conjuction and"
choice9[3]="Change the punctuation to a question mark"
choice9[4]="Make the subject plural"

question[10]="What kind of sentence is this: Ciara asked Mrs. Vrchota for help she also asked Ms. McDermott about the homework."
choice10[1]="run-on sentence"
choice10[2]="sentence fragment"
choice10[3]="question"
choice10[4]="exclamation"

solution[1]="d"
solution[2]="a"
solution[3]="c"
solution[4]="a"
solution[5]="c"
solution[6]="c"
solution[7]="c"
solution[8]="b"
solution[9]="b"
solution[10]="a"
