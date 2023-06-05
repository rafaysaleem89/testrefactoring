# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1:
**Title**: 
Research the best approach to adapt our database tables.
**Description**:
We need to be adapt our database tables to be able to handle custom ids, We will need to research on what would be the best approach to do this. As changing all existing relationships could take some time and is prone to mistakes. We need to understand which tools or techniques to use to modify this properly. One option could be to not change the relationships but that would slow down our report generation as we'll need to use joins. One could be to make a separate table for new entries and adapt old entries slowly with time. Or we can try to find a better approach.
**Acceptance Criteria**: 
We should have a plan of execution.
**Time/Effort:** 3 - 4 days.

### Ticket 2:
**Title**: 
Adapt database tables to use custom ids
**Description**:
We need to be adapt our database tables to be able to handle custom ids, this will include adding feilds for custom ids in the Agents table and then use those ids as foreign keys in other tables to make relationships. 

**Acceptance Criteria**: 
We should be able to write queries to get each workers shifts by using their custom ids instead of database ids. 
**Time/Effort:** 3 - 4 days.

### Ticket 3:
**Title**: Modify backend functions to use the custom id. 
**Description**: We need to modify our backend functions to use the custom id instead of the database id to generate the report. It would be best to modify the existing functions as we already have the functionality for genarating reports, so jusf modifying the queries will do. 
**Acceptance Criteria**: We should be able to call the function with the custom id and get the correct reports for the agents.
**Time/Effort:** 4 - 5 days.

### Ticket 4:
**Title**: Make a new screen on the front end to enable usage of custom id 
**Description**: We'll make a new screen that allows the users to enter the custom id and generate a report using this. For this we can use a simple form. Add validations for the id format and call the backend service.
**Acceptance Criteria**: We should be able to enter a user id in the form and get the correct reports for the agents.
**Time/Effort:** 4 - 5 days.
