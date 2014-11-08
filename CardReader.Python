import serial
file = open('students.txt','r')
searchlines = file.readlines()
file.close()
ser = serial.Serial()
ser.port = "/dev/ttyUSB0"
ser.baudrate = 9600
ser.open()
ii = 0
if ser.isOpen():
	while True:
		if(ii == 0):
			ser.read(1)
		else:
			ser.read(2)

		response =  ser.readline()
	#	for i, line in enumerate(searchlines):
		#	print "start"+line+" end"
		#	print  line in response
		#	if (line in response):
			#	for l in searchlines[i:i+2]: 
				#	print l
				#	print "In second for loop"
				#print
	    #    print response
		if("6A0049ED6FA1" in response):
			print("You have $" +str(71.85)+" dining dollars left")
			print("You have $" +str(10.75)+" panther funds left")
			print("You have $" +str(14)+" meal swipes left")
			print
		ii = ii + 1
