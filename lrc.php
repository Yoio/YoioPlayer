<?php 
		$lrc = file_get_contents("Down.lrc");
		$pattern = "/\[.*/";

		preg_match_all($pattern, $lrc, $matches);

		$timepattern = "/\[(.*)\]/";
		preg_match_all($timepattern, $lrc, $time);

		$textpattern = "/\](.*)/";
		preg_match_all($textpattern, $lrc, $text);

		$time = $time[1];
		$text = $text[1];


		foreach ($time as $t) {
			$timehandle = "/:/";
			$times = preg_split($timehandle, $t);
			$tim[] = ($times[0]*60)+$times[1];
		}

		$j = count($tim);

		for ($i=0; $i < $j; $i++) { 
			$result[] = array("time"=>$tim[$i],"text"=>$text[$i]);
		}

		echo json_encode($result);




 ?>