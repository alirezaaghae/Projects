<?php
ini_set("soap.wsdl_cache_enabled", "0");
error_reporting(0);
if($_POST['ajax']=='true'){
//include_once('../../db_config.php');

$browser = $_SERVER['HTTP_USER_AGENT'];
if(!empty($_SERVER['HTTP_CLIENT_IP'])){$ip = $_SERVER['HTTP_CLIENT_IP'];}elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];}else{$ip = $_SERVER['REMOTE_ADDR'];}

// database details
    $host = "localhost";
    $username = "admoon2_bosch";
    $password = "admoon2_bosch";
    $dbname = "admoon2_bosch";

    // creating a connection
    $db_connection = mysqli_connect($host, $username, $password, $dbname);

    // to ensure that the connection is made
    if (!$db_connection)
    {
        die("Connection failed!" . mysqli_connect_error());
    }
    
    mysqli_set_charset($db_connection,'utf8');
    date_default_timezone_set('Asia/Tehran');
    $datetime=date('Y-m-d H:i:s');

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $service = $_POST['service'];
    $location = $_POST['location'];

    mysqli_query($db_connection,"INSERT INTO Newpackage (name, phone , location, service, date) VALUES ('$name', '$phone', '$service','$location' ,'$datetime')");


//sms config
$smsconfigsql=mysqli_query($db_connection,"SELECT * FROM `variable` WHERE `type`='sms'");
while($smsconfigrow=mysqli_fetch_assoc($smsconfigsql)){$smsconfig[$smsconfigrow['name']]=$smsconfigrow['value'];}
             
//$message2Send='شماره جدید : '.$phone.'';
//$url='https://digital-lead.ir/engine/novin/'.urlencode($message2Send).'/false';
//$url=rtrim($url,'/');
//echo file_get_contents($url);
function sendMessage($smsuser,$smspass,$smsfrom,$smsphone,$smstext){
$sms_client = new SoapClient('http://api.payamak-panel.com/post/send.asmx?wsdl', array('encoding'=>'UTF-8'));
$parameters['username'] = $smsuser;
$parameters['password'] = $smspass;
$parameters['to'] = $smsphone;
$parameters['from'] = $smsfrom;
$parameters['text'] =$smstext;
$parameters['isflash'] =false;
echo $sms_client->SendSimpleSMS2($parameters)->SendSimpleSMS2Result;
}
function smscompiler($string){
global $service,$phone,$location,$name,$datetime;
$string=str_replace('{service}',$service,$string);
$string=str_replace('{phone}',$phone,$string);
$string=str_replace('{location}',$location,$string);
$string=str_replace('{name}',$name,$string);
$string=str_replace('{datetime}',$datetime,$string);
return $string;
}
    
sendMessage($smsconfig['smsuser'],$smsconfig['smspass'],$smsconfig['smsfrom'],$smsconfig['smsadminphone'],smscompiler($smsconfig['smsadmintext']));
// sendMessage($smsconfig['smsuser'],$smsconfig['smspass'],$smsconfig['smsfrom'],$phone,smscompiler($smsconfig['smstext']));    
}
?>
