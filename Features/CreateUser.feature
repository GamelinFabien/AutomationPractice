Feature: CreateUser
 
@AddScenario
Scenario: CreateUser
Given Go to the Home page
When Click the signin button
And have no credentials
Then fill my Email adress
And Click the Create Account button
Then I am on creation account page
And fill the informations
And click Register button
