#!/usr/bin/env python
# coding: utf-8

# # Data Analytics Dashboard for Coordinators
# 
# ## The Coordinator can perform the following actions:
# 
# ### (I) Look at the following tables:
# - User Table which contains information about students, coordinators, their age, gender and the refugee camps they are based.
# - Exam Table which contains information about the students' exam scores and their feedback
# - Multiple Choice Questions (MCQ) Table which contains all the questions from second section, the true answers of the questions
# - Answers of every student corresponding to every question from the MCQ section
# - Truth Table containing answers of every student whether they were correct or not
# 
# ### (II) Analysis of Exam Scores:
# - Histogram plots for first, second, third section for the whole group 
# - Identify which questions were the hardest 
# - Average time taken to finish the exam
# - Can indentify which students scored the highest and which students scored the least
# 
# ### (III) Cheating Notification:
# - A table is displayed if two students have exactly the same answers with exactly the same time taken to finish the exam
# 
# ### (IV) Sentiment Analysis on Feedback provided by students:
# - Sentiment Analysis is performed on the feedback text data provided by the students: Polarity for the text varies between -1 and +1 where +1 implies extremly positive and -1 implies extremly negative
# - WordCloud corresponding to the most frequest used words in the feedback is shown
# 
# ### (V) Enter and visualize Attendance:
# - Coordinator can input the attendance percentage of a student and view a pie chart accordingly
# 

# # The code begins here:

# In[1]:


#import required libraries

import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
import json
import requests


# ## User Table

# In[2]:


url = "https://inzone-c-parse.tools.deployimpact.ch/parse/users"
querystring = {"include":"refugeeCampId"}
payload = ""
headers = {
    'X-Parse-Application-Id': "inzonec"
    }
response = requests.request("GET", url, data=payload, headers=headers, params=querystring)
#print(response.text)


# In[3]:


output = response.text


# In[4]:


response_dict = json.loads(output)


# In[5]:


df_response = pd.DataFrame(response_dict)


# In[6]:


trial = []


# In[7]:


for i in range(len(df_response)):
    ck = pd.DataFrame(df_response.results[i])
    trial.append(ck[ck.index == 'objectId'])
    
final_df_usertable = pd.concat(trial, ignore_index=True)


# In[9]:


final_df_usertable


# ## Exam Table

# In[10]:


url = "https://inzone-c-parse.tools.deployimpact.ch/parse/classes/UserExam"
querystring = {"include":"userId", "include":"examId"}
payload = ""
headers = {
    'X-Parse-Application-Id': "inzonec"
    }
response = requests.request("GET", url, data=payload, headers=headers, params=querystring)
#print(response.text)


# In[11]:


output = response.text


# In[12]:


response_dict = json.loads(output)


# In[13]:


df_response = pd.DataFrame(response_dict)


# In[14]:


trial = []


# In[15]:


for i in range(len(df_response)):
    ck = pd.DataFrame(df_response.results[i])
    trial.append(ck[ck.index == 'objectId'])
    
final_df_examtable = pd.concat(trial, ignore_index=True)


# In[16]:


final_df_examtable


# In[17]:


final_df_examtable["overall_score"] = final_df_examtable["firstSection"] + final_df_examtable["secondSection"] + final_df_examtable["thirdSection"]


# In[18]:


final_df_examtable["overall_score_percentage"] = (final_df_examtable["overall_score"]/300) * 100


# In[20]:


final_df_examtable


# ## Average time taken to finish the exam

# In[21]:


final_df_examtable["totalTimeToFinishSecondSection"].mean()


# In[22]:


len(final_df_examtable)


# In[23]:


final_df_examtable["gender"] = 0
final_df_examtable["age"] = 0
final_df_examtable["username"] = 0


# In[24]:


for i in range(len(final_df_examtable)):
    for j in range(len(final_df_usertable)):
        if (final_df_examtable['userId'][i]==final_df_usertable["objectId"][j]):
            final_df_examtable["gender"][i] = final_df_usertable["gender"][j]
            final_df_examtable["age"][i] = final_df_usertable["age"][j]
            final_df_examtable["username"][i] = final_df_usertable["username"][j]


# In[25]:


final_df_examtable


# # Analysis of the Exam Scores

# In[34]:


fig, ax = plt.subplots()
sns.histplot(data=final_df_examtable, x="overall_score_percentage", color="#F8BE48", binwidth=10, ax = ax)
ax.set_xlim(0,100)
plt.show()
#fig.savefig("overallscorepercentage.png")


# In[27]:


fig, ax = plt.subplots()
sns.histplot(data=final_df_examtable, x="firstSection", color="#F8BE48", binwidth=10)
ax.set_xlim(0,100)
plt.show()


# In[28]:


fig, ax = plt.subplots()
sns.histplot(data=final_df_examtable, x="secondSection", color="#F8BE48", binwidth = 10)
ax.set_xlim(0,100)
plt.show()


# In[35]:


fig, ax = plt.subplots()
sns.histplot(data=final_df_examtable, x="thirdSection", color="#F8BE48", binwidth = 10)
ax.set_xlim(0,100)
plt.show()


# In[36]:


fig, ax = plt.subplots()
sns.scatterplot(data=final_df_examtable, x="username", y="overall_score_percentage", hue="gender", s = 70)
ax.set_ylim(0,100)
plt.show()
#fig.savefig("gender_marks.png")


# In[37]:


fig, ax = plt.subplots()
sns.scatterplot(data=final_df_examtable, x="username", y="overall_score_percentage", hue="age", s = 70, palette = "rocket")
ax.set_ylim(0,100)
plt.show()
fig.savefig("age_marks.png")


# # Multiple Choice Questions Table

# In[38]:


url = "https://inzone-c-parse.tools.deployimpact.ch/parse/classes/MultipleChoiceQuestion"
querystring = {}
payload = ""
headers = {
    'X-Parse-Application-Id': "inzonec"
    }
response = requests.request("GET", url, data=payload, headers=headers, params=querystring)
#print(response.text)


# In[39]:


output = response.text


# In[40]:


response_dict = json.loads(output)


# In[41]:


df_response = pd.DataFrame(response_dict)


# In[42]:


trial = []


# In[43]:


for i in range(len(df_response)):
    ck = pd.DataFrame(df_response.results[i])
    trial.append(ck[ck.index == 'objectId'])
    
final_df_MCQtable = pd.concat(trial, ignore_index=True)


# In[44]:


final_df_MCQtable


# # MCQ answers of all users

# In[45]:


url = "https://inzone-c-parse.tools.deployimpact.ch/parse/classes/UserMCQAnswer"
querystring = {}
payload = ""
headers = {
    'X-Parse-Application-Id': "inzonec"
    }
response = requests.request("GET", url, data=payload, headers=headers, params=querystring)
#print(response.text)


# In[46]:


output = response.text


# In[47]:


response_dict = json.loads(output)


# In[48]:


df_response = pd.DataFrame(response_dict)


# In[49]:


trial = []


# In[50]:


for i in range(len(df_response)):
    ck = pd.DataFrame(df_response.results[i])
    trial.append(ck[ck.index == 'objectId'])
    
final_df_MCQAns = pd.concat(trial, ignore_index=True)


# In[51]:


final_df_MCQAns


# In[52]:


questions = final_df_MCQAns['questionId'].unique()


# In[53]:


questions


# In[54]:


users = final_df_MCQAns['userId'].unique()


# In[55]:


users


# In[56]:


w, h = len(questions), len(users)
Matrix = [[0 for x in range(w)] for y in range(h)] 


# In[57]:


for i in range(h):
    for j in range(w):
        row = final_df_MCQAns[(final_df_MCQAns['questionId']==questions[j]) & (final_df_MCQAns['userId']==users[i])]
        if not row.empty:
            Matrix[i][j] = row["answer"]


# In[58]:


final_df_userans = pd.DataFrame(Matrix)


# In[59]:


final_df_userans


# In[60]:


for i in range(final_df_userans.shape[1]):
    final_df_userans = final_df_userans.rename(columns={i: questions[i]})


# In[61]:


for j in range(final_df_userans.shape[0]):
    final_df_userans = final_df_userans.rename(index={j: users[j]})


# In[62]:


final_df_userans = final_df_userans.astype(int)


# In[63]:


final_df_userans


# In[64]:


duplicate_answers = final_df_userans[final_df_userans.duplicated(keep=False)]


# In[65]:


duplicate_answers


# In[66]:


duplicate_answers["timetaken"]=0
duplicate_answers["username"]=""


# In[74]:


for i in range(len(duplicate_answers)):
    for j in range(len(final_df_examtable)):
        if (pd.isna(final_df_examtable["totalTimeToFinishSecondSection"][j]) == False):
            if (final_df_userans.index[i]==final_df_examtable["userId"][j]):
                duplicate_answers["timetaken"][i] = final_df_examtable["totalTimeToFinishSecondSection"][j]
                duplicate_answers["username"][i] = final_df_examtable["username"][j]


# ## Cheating Notification

# In[75]:


duplicate_answers


# In[76]:


new_row = final_df_MCQtable["trueAnswer"]


# In[77]:


new_row.index = final_df_MCQtable["objectId"]


# In[78]:


final_df_userans = final_df_userans.append(new_row)


# In[79]:


final_df_userans


# In[80]:


ck = final_df_userans[final_df_userans.index == "trueAnswer"]


# In[81]:


ck


# In[83]:


max_score_per_question = 100/len(questions)


# In[84]:


max_score_per_question


# In[89]:


ta = final_df_userans[final_df_userans.index == "trueAnswer"]


# In[90]:


ct.index[1] == ta["XxfMEUBz2K"]


# In[91]:


ta[ta.columns[0]]


# In[92]:


ct.index[0]


# In[93]:


ta.columns


# In[94]:


final_df_userans.columns[0]


# In[95]:


w = len(questions)
counts_incorrect = [0 for x in range(w)]


# In[96]:


len(ta.columns)


# In[97]:


final_df_userans


# In[98]:


Matrix = [[0 for x in range(final_df_userans.shape[1])] for y in range(final_df_userans.shape[0]-1)] 


# In[99]:


Matrix


# In[105]:


ta = final_df_userans[final_df_userans.index == "trueAnswer"]

for i in range(final_df_userans.shape[0]-1):
    for j in range(final_df_userans.shape[1]):
        Matrix[i][j] = (final_df_userans[final_df_userans.columns[j]][i]==ta[ta.columns[j]][0])


# In[106]:


Matrix


# In[107]:


final_df_ta = pd.DataFrame(Matrix)


# In[108]:


final_df_ta


# In[109]:


for i in range(final_df_ta.shape[1]):
    final_df_ta = final_df_ta.rename(columns={i: questions[i]})


# In[110]:


for j in range(final_df_ta.shape[0]):
    final_df_ta = final_df_ta.rename(index={j: users[j]})


# In[111]:


final_df_ta = final_df_ta.astype(int)


# ## Truth Table

# In[112]:


final_df_ta


# In[113]:


sum_ques = final_df_ta.sum(axis=0)


# In[114]:


sum_ques


# In[ ]:


## Hardest Questions


# In[115]:


hard_ques_score = sum_ques.min()
print(hard_ques_score)
for i in range(len(sum_ques)):
    if (sum_ques[i]==hard_ques_score):
        print(sum_ques.index[i])
        for j in range(len(final_df_MCQtable)):
            if (sum_ques.index[i]==final_df_MCQtable["objectId"][j]):
                print(final_df_MCQtable["question"][j])


# In[315]:


sum_ans = final_df_ta.sum(axis=1)


# In[319]:


sum_ans = sum_ans*max_score_per_question


# In[340]:


sum_ans.index


# ## Highest Scores

# In[126]:


max_score = sum_ans.max()
print(max_score)
for i in range(len(sum_ans)):
    if (sum_ans[i]==max_score):
        print(sum_ans.index[i])
        for j in range(len(final_df_examtable)):
            if (sum_ans.index[i]==final_df_examtable["userId"][j]):
                print(final_df_examtable["username"][j])


# ## Minimum Scores

# In[353]:


min_score = sum_ans.min()
print(min_score)
for i in range(len(sum_ans)):
    if (sum_ans[i]==min_score):
        print(sum_ans.index[i])
        for j in range(len(final_df_examtable)):
            if (sum_ans.index[i]==final_df_examtable["userId"][j]):
                print(final_df_examtable["username"][j])


# # Sentiment Analysis on Feedback Text and Wordcloud

# In[116]:


import spacy


# In[117]:


#pip install spacytextblob


# In[118]:


from spacytextblob.spacytextblob import SpacyTextBlob


# In[119]:


nlp = spacy.load("en_core_web_sm")


# In[120]:


final_df_examtable


# In[121]:


text_overall = ""


# In[122]:


for i in range(len(final_df_examtable)):
    text_overall+= final_df_examtable['optionalFeedback'][i]


# In[ ]:


text_overall


# In[ ]:


text = final_df['optionalFeedback'][5]


# In[ ]:


text


# In[123]:


#nlp.add_pipe("spacytextblob")
doc = nlp(text)


# In[167]:


print('Polarity:', doc._.polarity)
print('Sujectivity:', doc._.subjectivity)
print('Assessments:', doc._.assessments)


# In[143]:


from textblob import TextBlob
blob = TextBlob(text)
print(blob.sentiment_assessments.polarity)
print(blob.sentiment_assessments.subjectivity)
print(blob.sentiment_assessments.assessments)


# In[113]:


#pip install wordcloud


# In[406]:


from wordcloud import WordCloud, STOPWORDS


# In[411]:


wc = WordCloud(background_color = 'white', width = 1920, height = 1080)
wc.generate_from_text(text_overall)
plt.imshow(wc)
plt.axis("off")


# # Visualize Attendance  

# In[416]:


attendance = int(input("Enter attendance percentage:"))


# In[417]:


# Pie chart
sizes = [attendance,100-attendance]
#colors
colors = ["#F8BE48",'#c4c4c4']
#explsion
#explode = (0.05,0.05,0.05,0.05)
 
plt.pie(sizes, colors = colors, startangle=90, pctdistance=0.85) #autopct='%1.1f%%'
#draw circle
centre_circle = plt.Circle((0,0),0.70,fc='white')
fig = plt.gcf()
fig.gca().add_artist(centre_circle)
fig.gca().add_artist(centre_circle)
plt.text(0.28, 0.45, str(attendance)+'%', fontsize=50, horizontalalignment='center',
         verticalalignment='center', transform=ax.transAxes)

# Equal aspect ratio ensures that pie is drawn as a circle
#ax1.axis('equal')  
plt.tight_layout()
plt.show()


# In[ ]:





# In[ ]:




