<!DOCTYPE html>
<html>
<head>
    <title>Form Data</title>
</head>
<body>
    <h1>Raw Form Data</h1>
    <pre>
        <?php
        print_r($_POST);
        ?>
    </pre>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        echo "<h1>Form Data</h1>";
        echo "<p><br><strong>Company Name:</strong> " . $_POST["position"] . "</p";
        echo "<p><br><strong>Company ID:</strong> " . $_POST["CompanyID"] . "</p";
        echo "<p><br><strong>Address:</strong> " . $_POST["address"] . "</p";
        echo "<p><br><strong>City:</strong> " . $_POST["city"] . "</p";
        echo "<p><br><strong>Zipcode:</strong> " . $_POST["zipcode"] . "</p";
        echo "<p><br><strong>Phone (optional):</strong> " . $_POST["tel"] . "</p";
        echo "<p><br><strong>Email (optional):</strong> " . $_POST["email"] . "</p";
        echo "<p><br><strong>More than one location:</strong> " . (isset($_POST["multiple_locations"]) ? "Yes" : "No") . "</p";

        $position = $_POST["position"];
        $CompanyID = $_POST["CompanyID"];
        $address = $_POST["address"];
        $city = $_POST["city"];
        $zipcode = $_POST["zipcode"];
        $tel = $_POST["tel"];
        $email = $_POST["email"];
        $multiple_locations = isset($_POST["multiple_locations"]) ? "Yes" : "No";



        // Format the data for saving
        $dataToSave = "$position;$CompanyID;$address;$city;$zipcode;$tel;$email;$multiple_locations";

        // Save the data to the file
        file_put_contents("output.html", $dataToSave . PHP_EOL, FILE_APPEND);

        // Read the contents of the file and display it
        $fileContents = file_get_contents("output.html");
        echo "<pre>$fileContents </pre>";
    }
    ?>
</body>
</html>
