
			 *****
0		-  - * - * -  -  -   -   -   -   -   -   -
             *	 ****
20		-  - * -  - * -  -   -   -   -   -   -   -
		     ****	*
40		-  -  - * - * -  -   -   -   -   -   -   -
				*****
60		-  -  -  -  -  -   -   -   -   -   -   -

80		-  -  -  -  -  -   -   -   -   -   -   -

100		-  -  -  -  -  -   -   -   -   -   -   -

120		-  -  -  -  -  -   -   -   -   -   -   -

140		-  -  -  -  -  -   -   -   -   -   -   -

160		-  -  -  -  -  -   -   -   -   -   -   -

180		-  -  -  -  -  -   -   -   -   -   -   -

200		-  -  -  -  -  -   -   -   -   -   -   -
		0 20 40 60 80 100 120 140 160 180 200 220
		

contour  0 -- F OO T 00 F -- F -- F --

contour 20 -- F 00 T 00 T 00 F -- F --

contour 40 -- F 00 F 00 T 00 F -- F --

contour 60 -- F -- F 00 F 00 F -- F --

		   c0   c20  c40  c60  c80

[20, 0],
[20, 40],				
[40, 40],				40, 0
[40, 60],	--------	40, 20
[60, 60],	--------	60, 20
[60, 20],				60, 40
[40, 20],
[40, 0],


			Get the list of all points known
			--------------------------------
20, 0 	=> 	20, 40 	Change Y		20, 0
									20, 20
									20, 40
20, 40	=> 	40, 40 	Change X		40 ,40
40, 40	=> 	40, 60 	Change Y		40, 60
40, 60 	=> 	60, 60 	Change X		60, 60
60, 60 	=> 	60, 20	Change Y		60, 40
									60, 20
60, 20	=>	40, 20	Change X		40, 20
40, 20	=> 	40, 0	Change Y		40, 0
40, 0	=> 	20, 0	Change X		20, 0

			Process: All coordinates should in the list to validate the point
			-----------------------------------------------------------------
	40 , 0 	defined by 20, 0  	AND 40, 0
			defined by 20, 20	AND 40, 20
			
	40, 20	defined by 20, 20  	AND 40, 20
			defined by 20, 40	AND 40, 40
				
	60, 20	defined by 40, 20  	AND 60, 20
			defined by 40, 40	AND 60, 40
	
	60, 40	defined by 40, 40  	AND 60, 40
			defined by 40, 60	AND 60, 60
			
			Point unknown if one or more coordinates not in the list
			---------------------------------------
	40, 40	defined by 20, 40  	AND 40, 40	
			defined by 20, 60	AND 40, 60	=>	20, 60 (not in the list) 
			
	20, 20	defined by 00, 20  	AND 20, 20	=> 	00, 20 (not in the list) 
			defined by 00, 40	AND 20, 40	=>	00, 40 (not in the list) 
			
			Process: Check all points from min coordinates to max coordinates
			--------------------------------------------------------
			
			Check from  20,0 to 60,60
			
			20, 0 =>	FALSE 	(0, 0) is not in the list
			40, 0 =>	TRUE
			60, 0 =>	FALSE	(60, 0) is not in the list
			20, 20 =>	FALSE	(0, 20) is not in the list
			40, 20 =>	TRUE	
			60, 20 =>	TRUE
			20, 40 =>	FALSE	(0, 40) is not in the list
			40, 40 =>	FALSE	(20, 60) is not in the list
			60, 40 =>	TRUE
			20, 60 =>	FALSE	(0, 60) is not in the list
			40, 60 =>	FALSE	(20, 80) is not in the list
			60, 60 =>	FALSE	(60, 80) is not in the list
	



