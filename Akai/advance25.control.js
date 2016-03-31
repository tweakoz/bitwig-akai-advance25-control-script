loadAPI(1);

host.defineController("Akai", "Advance25-jg", "0.0.1", "8ab858c2-9950-48e9-8bf1-11ad6c2c09c3");
host.defineMidiPorts(1,1);


function init() {
    transport = host.createTransportSection();
	
    host.getMidiInPort(0).setMidiCallback(onMidiPort1);

    //Send Notes to Bitwig w/o filter
    noteIn = host.getMidiInPort(0).createNoteInput("Notes");
}

function onMidiPort1(status, data1, data2) {
    //printMidi(status, data1, data2);

    if(isChannelController(status)){
	    if(data1 == 118 && data2 == 127) {
		transport.play();
	    }
	    else if(data1 == 117 && data2 == 127) {
		transport.stop();
	    }
	    else if(data1 == 114 && data2 == 127) {
		transport.toggleLoop();
	    }
            else if(data1 == 119 && data2 == 127) {
                transport.record();
            }
    }

}

function exit() {
    println("disconnected!");
}

