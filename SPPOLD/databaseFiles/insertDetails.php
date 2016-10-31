<?php 
// Including database connections
require_once 'database_connections.php';
// Fetching and decoding the inserted data
$data = json_decode(file_get_contents("php://input")); 
// Escaping special characters from submitting data & storing in new variables.

$ru = mysqli_real_escape_string($con, $data->ru);
$solution = mysqli_real_escape_string($con, $data->solution);
$companyname = mysqli_real_escape_string($con, $data->companyname);
$status = mysqli_real_escape_string($con, $data->status);
$q2fy16 = mysqli_real_escape_string($con, $data->q2fy16);
$statusq2fy16 = mysqli_real_escape_string($con, $data->statusq2fy16);
$contributionq2fy16 = mysqli_real_escape_string($con, $data->contributionq2fy16);
$q3fy16 = mysqli_real_escape_string($con, $data->q3fy16);
$statusq3fy16 = mysqli_real_escape_string($con, $data->statusq3fy16);
$contributionq3fy16 = mysqli_real_escape_string($con, $data->contributionq3fy16);
$q4fy16 = mysqli_real_escape_string($con, $data->q4fy16);
$statusq4fy16 = mysqli_real_escape_string($con, $data->statusq4fy16);
$contributionq4fy16 = mysqli_real_escape_string($con, $data->contributionq4fy16);
$q1fy17 = mysqli_real_escape_string($con, $data->q1fy17);
$statusq1fy17 = mysqli_real_escape_string($con, $data->statusq1fy17);
$contributionq1fy17 = mysqli_real_escape_string($con, $data->contributionq1fy17);
$dealsize = mysqli_real_escape_string($con, $data->dealsize);
$comm = mysqli_real_escape_string($con, $data->comm);
$userinfo = mysqli_real_escape_string($con, $data->userinfo);

// mysqli insert query
$query = "INSERT into salespipelineportal (proj_ru,proj_solu,proj_comp,proj_status,proj_q2fy16,proj_statusq2fy16,proj_contributionq2fy16,proj_q3fy16,proj_statusq3fy16,proj_contributionq3fy16,proj_q4fy16,proj_statusq4fy16,proj_contributionq4fy16,proj_q1fy17,proj_statusq1fy17,proj_contributionq1fy17,proj_deal,proj_comm,user_info) VALUES ('$ru','$solution','$companyname','$status','$q2fy16','$statusq2fy16','$contributionq2fy16','$q3fy16','$statusq3fy16','$contributionq3fy16','$q4fy16','$statusq4fy16','$contributionq4fy16','$q1fy17','$statusq1fy17','$contributionq1fy17','$dealsize','$comm','$userinfo')";
// Inserting data into database
mysqli_query($con, $query);
echo true;
?>