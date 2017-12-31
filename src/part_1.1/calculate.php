<?php

$submit = $_POST['submit'];
$start_date = $_POST['start_date'];
$end_date = $_POST['end_date'];

if (! submit) {
  # code...
  die('error');
}



// would of just used the iterator but w/e

if ($submit) {
  # code...
  $start = new DateTime( $start_date, new DateTimeZone('America/Toronto') );
  $end = new DateTime( $end_date, new DateTimeZone('America/Toronto') );



  echo count_days_between($start, $end);
}


function count_days_between($start_date, $end_date) {
  # code...
  $days_counter = 0;

  while ( $start_date < $end_date ) {
    # code...
    $date = date( "w", strtotime($start_date->format('Y-m-d')) );

    if ( $date != 0 && $date  != 6 ) {
        # code...
        $days_counter += 1;
    }

    $start_date->modify('+1 day');
  }


  return $days_counter - 1;
}
