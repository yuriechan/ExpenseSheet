<?php
for ($row = 0; $row < 8; $row++){
  echo "<div style = 'clear:both'>";
    for ($col = 0; $col < 3; $col++){
      echo "<input type = 'text' style = 'float:left;' name = '$row:$col' id = '$row:$col'>";
    }
  echo "</div>";
}
?>
