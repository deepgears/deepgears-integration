# INTEGRATE DEEPGEARS TO YOUR SHOPIFY WEBSITE

## 1.	Add the s3 location of the main.js and main.css to the script section as follows:

```
<script defer="defer"
        src="S3_main-js_URI"></script>
    <link href="S3_main-css_URI"
        rel="stylesheet">
```
The corresponding `S3_main-js_URI` and `S3_main-css_URI` will be provided by DeepGears's team

## 2.	Add the following to your html head 

```
<!doctype html>
<html lang="en" translate="no" class="notranslate">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Deepgears</title>
    <!-- deep gears script -->
    <script defer="defer"
        src="https://deep-gears-storage.s3.eu-west-2.amazonaws.com/client_library/adidas/static/js/main.js"></script>
    <link href="https://deep-gears-storage.s3.eu-west-2.amazonaws.com/client_library/adidas/static/css/main.css"
        rel="stylesheet">
        <!-- end of deep gears script -->
</head>

<body>
    <div style="display:grid;place-items:center">
        <!-- deep gears tag -->
        <div id="deep-gears-root" data-outfit-id="33@bottom"
            style="min-width:375px;min-height:812px;max-width:375px;max-height:812px"></div>
        <!-- end of deepgears tag -->
    </div>
</body>

</html>
```
 
## 3.	Upload the ‘View in 3D image’ to each product you wish to integrate with DeepGears
 
This image needs to be the last image in the image list on shopify, so deepgears.js can easily know its position in the DOM tree. Add an alt text to this uploaded image as per the following example:

| # | Product Name  | Alt text |
| :---:   | :-: | :-: |
| 1 | Cartoon fantasy shorts with sporty t-shirt | deep-gears-99@bottom |

The exact atl text to be used for each product will be provided by the DeepGears' team.
An example of the ‘View in 3D image’ pic can be found below:

<img src="https://user-images.githubusercontent.com/60765482/169601793-95158f47-d068-4733-aa08-adcf9f480347.jpg" width="100" height="100" />


## 4.	Add the following tag in the html body

```
<div id="deep-gears-root"  
            style="min-width:375px;min-height:812px;max-width:375px;max-height:812px"></div>
```

## 5.	Amend the styling scripts

Some amendments to the following scripts are also needed (this may vary on your Shopify theme). This will ensure that DeepGears webapp is activated for the products containing the 'View in 3D image' with the corresponding alt text.

An example of the edited scripts can be found in:

- snippets/product-template.liquid
- snippets/media.liquid
- layout/theme.liquid

## 6.	Add the "Try it on you" button

    a. go to product description
    b. switch to html code view
    c. paste this code as the last code

```
<div class="text">Try it on you in 3D</div>
<img src="https://deep-gears-storage.s3.eu-west-2.amazonaws.com/resources/svg/Group+2.svg" alt="deep-gears-sustainability">
</div>
```

## 7.	Finally, add deepgears.css and deepgears.js
Place these two scripts in the assets section
