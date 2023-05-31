[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=fssa-batch3_maruthan.alagar__web_project&metric=bugs)](https://sonarcloud.io/summary/new_code?id=fssa-batch3_maruthan.alagar__web_project)


Userflow : https://drive.google.com/drive/folders/1VDiP6IlCi3fnf6GGEF-LKljH47jsb9lY  
WireFrame:  https://drive.google.com/drive/folders/1VDiP6IlCi3fnf6GGEF-LKljH47jsb9lY  
User Survey: https://drive.google.com/drive/folders/1VDiP6IlCi3fnf6GGEF-LKljH47jsb9lY    
Problem Statement: https://drive.google.com/drive/folders/1VDiP6IlCi3fnf6GGEF-LKljH47jsb9lY 


M A M Billing-Modules & Features

1. User Module  (completed)    
    1. Register    
    2. Login    
    3. Profile Edit/Delete       

2. Product Module (completed)    
    1. Create product    
    2. Create Product List     
    3. Read / Update Product Details     
    4. Delete Product Details     

3. Stock Module (completed)   
    1. Create Stock   
    2. Create Stock List    
    3. Read / Update Stock Details   

4. Customer Module (completed)   
    1. Create Customer    
    2. Create customer List   
    3. Read / Update Customer Details  

5. Bill Module (working on)   
    1. Create Bill (completed)    
    2. Read Bill   
6. Store history Module (Yet to Start)      
    1. Customer Purchase history   
    2. Billing History       
                   
7. Store history Module (Yet to Start)              
    1. Customer Purchase history                 
    2. Billing History                   

8. Search Details(Yet to Start)     
    1. Item Search   
    2. Stock Search   
    3. Customer Search   
    4. Bill Search   

   
   
# Billing

## Shop

### Create an account
- Scenario 1: Successfully create an account
Register Page
    - Steps:
        1. Navigate to the registration page.
        2. Enter the required information such as Shop name, Shop Lincence Number,Phone Number,Shop email.
        3. Click the "Continue" button.
    - Expected Result:
        - User will get alert from Page as "Your Details is Successfully registered"
        - The user is redirected to the User Name Creation page.
Username Creation page
    - Steps:
        1. Navigate to the Username Creation page.
        2. Enter the required information such as email, and password.
        3. Click the "Finish" button.
    - Expected Result:
        - User will get alert from Page as "Your Username is successfully Created"
        - The user is redirected to the Login page.
Login page
    - Steps:
        1. Navigate to the Login page.
        2. Enter the required information such as email, and password.
        3. Click the "login" button.
    - Expected Result:
        - User will get alert from Page as "Your successfully Logined"
        - The user is redirected to the Home page.


### View Profile/Update More Shop Details
- Scenario 1: Successfully Update More Shop Detils.
    - Steps:
        1. Log in as a Shop.
        2. Click the "Profile" button you see in Home Page Nav bar.
        3. Navigate to the profile page
        4. Enter the Another information such as GSTN Number, Address and Print Name (Logo is not working because after completing bill creation it will be enabled).
        5. Click the "Save" button.
    - Expected Result:
        - User will get alert from Page as "Successfully Updated"    
        
### Logout from Site
- Scenario 1: Successfully Logged out from Site.
    - Steps:
        1. Log in as a Shop.
        2. Click the "Profile" button you see in Home Page Nav bar.
        3. Navigate to the profile page
        5. There you see "LogOut" button Click It To logout.
    - Expected Result:
        - User will get confirm message from Page as "Are you Sure?"
        
 ### Delete Shop Details
- Scenario 1: Successfully Delete Shop Detils.
    - Steps:
        1. Log in as a Shop.
        2. Click the "Profile" button you see in Home Page Nav bar.
        3. Navigate to the profile page
        5. There you see "Delete My Account" button Click It To Delete.
    - Expected Result:
        - User will get alert from Page as "Successfully Deleted"

### Add Product/Item Details
- Scenario 1: Successfully Add product/item details
    - Steps:
        1. Log in as a Shop.
        2. Click the "Item" button you see in Nav bar.You Redirected to Item List page.
        3. In Item List page Click the "Add New item" button to add new item.
        4. Navigate to the add product page
        5. Fill all details in add Item page.
        6. Click "save" Button

    - Expected Result:
        - User will get alert from Page as "Product is Successfully Created"
        - user will redirected to List page and user will see added product in Item List

### Change Product/Item Status & Details
- Scenario 1: Successfully change product/item Status & details.
    - Steps:
        1. Log in as a Shop.
        2. Click Item button you see in Nav bar.
        3. In Item List user can see a arrow in every row click that arrow to view details.
        3. Navigate to the view product page
        5. In view product page user can see two radio button here user change product status and here user can edit product details also.
        6. click the "save" button to save edits.

    - Expected Result:
        -  User will get alert from Page as "Product Details Successfully Updated"
        - user will redirected to Item List page and user will see Edited product in Item List


### Add Stock Details
- Scenario 1: Successfully Add Stock details
    - Steps:
        1. Log in as a Shop.
        2. Click the "Stock" button you see in Nav bar.
        3. In Stock List page you see "Add new stock" button click that to add Stock details.
        4. Navigate to the add product page
        5. Fill all details in add Stock page.
        6. Click "save" Button

    - Expected Result:
        - User will get alert from Page as "Stock is Successfully Created"
        - user will redirected to Stock List page and user will see added Stock in Stock List


### Read & Edit Stock Details
- Scenario 1: Successfully Read & Edit Stock details.
    - Steps:
        1. Log in as a Shop.
        2. Click "Stock" button you see in Nav bar. In Stock List user can see a arrow in every row.
        3. Click arrow to view Stock details.
        4. Navigate to the view Stock page
        5. In view Stock page user can edit Stock details here.
        6. click the "save" button to save edits.

    - Expected Result:
        -  User will get alert from Page as "Stock Details Successfully Updated"
        -  user will redirected to Stock List page and user will see Edited stock in stock List

 ### Add Customer Details
- Scenario 1: Successfully Add Customer details
    - Steps:
        1. Log in as a Shop.
        2. Click the "Customer" button you see in Nav bar.
        3. In customer List page you see "Add new Customer" button click that to add customer details.
        4. Navigate to the add Customer page
        5. Fill all details in add customer page.
        6. Click "save" Button

    - Expected Result:
        - User will get alert from Page as "Customer Successfully Created"
        - user will redirected to customer List page and user will see added customer in customer list


### View and Edit Customer Details
- Scenario 1: Successfully View & Edit customer details.
    - Steps:
        1. Log in as a Shop.
        2. Click Customer button you see in Nav bar. In customer List user can see a arrow in every row.
        3. Click arrow to view customer details.
        4. Navigate to the view customer page
        5. In view customer page user can edit customer details.
        6. click the "save" button to save edits.

    - Expected Result:
        -  User will get alert from Page as "Customer Details Successfully Updated"
        - user will redirected to customer List page and user will see Edited customer in customer List

   
   
   
   
