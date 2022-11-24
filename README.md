# DeepGears integration

DeepGears' webapp comes as a javascript application, featuring Shadow DOM to preserve its styling. DeepGears' webapp can be easily integrated on any website and can be acceessed in various ways depending on clients' preferences.

## Standard integration (via button)

### 1.	Add a button to let users activate and access the fitting room, as per the example shown below:
<img width="500" alt="example" src="https://user-images.githubusercontent.com/78560064/203854291-0be612f8-9abe-4edc-9e1a-ab96388aab70.png">

### 2.	Add the following HTML code to the button (the minimum configuration for the app to work). The HTML code will activate the fitting room with one of our testing assets:
```
<!doctype html>
<head>
    <!-- the script and css that power the widget -->
    <script defer="defer"
        src="https://deep-gears-storage.s3.eu-west-2.amazonaws.com/client_library/slush/static/js/main.js"></script>
    <link href="https://deep-gears-storage.s3.eu-west-2.amazonaws.com/client_library/slush/static/css/main.css"
        rel="stylesheet">
</head>
<body>
    <!-- style the widget to your liking on either mobile or dektop -->
    <style>
        #deep-gears-root {
            min-width: 375px;
            max-width: 375px;
            min-height: 812px;
            max-height: 812px
        }
        @media (max-width:600px) {
            #deep-gears-root {
                min-width: 100vw;
                max-width: 100vw;
                min-height: 100vh;
                max-height: 100vh
            }
        }
    </style>
    <!-- The widget html code -->
    <div id="deep-gears-root" data-outfit-id='{"2d":"98@live","3d":"96@live"}'></div>
</body>
</html>
```
