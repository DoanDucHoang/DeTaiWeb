<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>
<table border="0" width="500">
            <tr>
            <td colspan="2"><b>Contact: </b></td></tr>
            
            
            
            <tr><td width="150">Tên khách hàng: </td>
           	<td><?php echo $_POST['name']; ?></td>
            </tr>
            <tr><td>email: </td>
           	<td><?php echo $_POST['email']; ?></td>
            </tr>
            <tr><td>Số điện thoại: </td>
            <td><?php echo $_POST['number']; ?></td>
            </tr>
            <tr><td>tin nhắn: </td>
            <td><?php echo $_POST['message']; ?></td>
            </tr>
            </table>
</body>
</html>