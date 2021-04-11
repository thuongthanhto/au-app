'use strict';

var EnergyConversion = function() {
	var that = this;
	
	this.baseBMR = 8700;
	this.BMR = 8700;
	
	this.ratios = {
		"kJ": {
			"Cal": .239
		},
		"Cal": {
			"kJ": 4.184
		}
	};
	
	this.synonyms = {
		"kilojoules": "kJ",
		"": "kJ",
		"kilojeweles": "kJ",
		"kj": "kJ",
		"calories": "Cal",
		"kcal": "Cal",
		"cal": "Cal",
		"caleries": "Cal",
		"hours": "h",
		"hour": "h",
		"hrs": "h",
		"hr": "h"
	}
	
	this._lookup = {
		female: {
			rmr: [655.1, 1.8, 9.6, 4.7],
			sex_age_values: [
			/*	Under 10
				Age		AVG kg		kJ/kg/day	AVG kJ	*/
				[1/12,	[4,			480,		1920] ],
				[2/12,	[5.7,		420,		2390] ],
				[6/12,	[7.44,		400,		2980] ],
				[1,		[9.5,		400,		3800] ],
				[2,		[11.8,		400,		4720] ],
				[3,		[13.85,		400,		5540] ],
				[4,		[16.8,		395,		6120] ],
				[5,		[18.9,		345,		6480] ],
				[6,		[21.3,		320,		6770] ],
				[7,		[23.8,		295,		7050] ],
				[8,		[26.6,		275,		7280] ],
				[9,		[29.7,		255,		7510] ],
			/* Over 10
			 	Age		*kg 		base kJ		Confidence-range*/
				[10,	[.056, 		3.434,		940] ],	
				[18,	[.062, 		2.036,		1000] ],
				[30,	[.034, 		3.538,		940] ],
				[60,	[.0386,		2.875,		0] ],
				[75,	[.0410, 	2.61,		0] ]
			],
			/* [occupational][non-occupational] */
			activity_adjust: [
				[1.4, 1.5, 1.6],	/* Light */
				[1.5, 1.6, 1.7],	/* Moderate */
				[1.5, 1.6, 1.7],	/* Heavy */
			]
		},
		male: {
			rmr: [66.5, 5.0, 13.7, 6.8],
			sex_age_values: [
 			/*	Under 10
				Age		AVG kg		kJ/kg/day	AVG kJ	*/
 				[1/12,	[4.15,		480, 		1990] ],
				[2/12,	[6.12,		420,		2570] ],
				[6/12,	[8,			400,		6200] ],
				[1,		[10.04,		400,		4020] ],
				[2,		[12.39,		400,		4960] ],
				[3,		[14.4,		400,		5760] ],
				[4,		[17.0,		395,		6730] ],
				[5,		[10.3,		370,		7190] ],
				[6,		[21.7,		350,		7570] ],
				[7,		[24.2,		325,		7920] ],
				[8,		[26.8,		305,		8240] ],
				[9,		[29.7,		290,		8550] ],
			/* Over 10
			 	Age		*kg 		base kJ		Confidence-range*/
				[10,	[.074, 		2.754,		880] ],
				[18,	[.063, 		2.896,		1280] ],
				[30,	[.048, 		3.653,		1400] ],
				[60,	[.0499, 	2.93,		0] ],
				[75,	[.0350, 	3.434,		0] ]
			],
			/* [occupational][non-occupational] */
			activity_adjust: [
				[1.4, 1.5, 1.6],	/* Light */
				[1.6, 1.7, 1.8],	/* Moderate */
				[1.7, 1.8, 1.9],	/* Heavy */
			]
		}
	};
	
	this._summary_METs = {
		"Light":			3.0,
		"Medium":			6.0,
		"Vigorous":			8.0
	};
	
	this._activity_METs = {
		"Basketball":					6.0,
		"Bicycling: gentle":			6.0,
		"Bicycling: vigorous":			10.0,
		"Billiards":					2.5,
		"Bushwalking":					6.0,
		"Child care":					2.5,
		"Dancing: ballroom":			3.0,
		"Dancing: nightclub":			4.5,
		"Fishing":						3.0,
		"Frisbee":						3.0,
		"Gaming: yoga":					2.3,
		"Gaming: dance":				7.2,
		"Gardening":					3.5,
		"Gardening: mowing":			4.5,
		"Golf":							4.3,
		"Guitar":						3.0,
		"Health club exercise":			5.0,
		"Housework: light":				2.5,
		"Housework: vacuuming":			3.5,
		"Housework: cooking":			2.0,
		"Housework: laundry":			2.3,
		"Kayaking":						5.0,
		"Lawn bowling":					3.3,
		"Making a bed":					3.3,
		"Martial arts":					10.3,
		"Paddleboarding":				6.0,
		"Pilates":						3.8,
		"Reading":						1.0,
		"Rock climbing":				8.0,
		"Running/jogging":				8.0,
		"Rugby":						8.3,
		"Rollerskating":				7.0,
		"Sitting at a sporting event":	1.5,
		"Skateboarding":				5.0,
		"Skiing":						7.0,
		"Snorkelling":					5.0,
		"Soccer":						7.0,
		"Stair climbing, slow":			4.0,
		"Stair climbing, fast":			8.8,
		"Surfing":						3.0,
		"Swimming":						7.0,
		"Table tennis":					4.0,
		"Tennis":						7.0,
		"Touch football":				8.0,
		"TV":							1.0,
		"Video game exercise":			3.8,
		"Volleyball":					8.0,
		"Walking: gentle":				3.5,
		"Walking: vigorous":			3.8,
		"Walking the Dog":				3.0,
		"Weight lifting":				3.0,
		"Yoga":							2.5
	};
	
	
	this.Cal2kJ = function(value) {
		return value * this.ratios.Cal.kJ;
	};
	
	this.kJ2Cal = function(value) {
		return value * this.ratios.kJ.Cal;
	};
	
	this.convert = function(value, source, destination) {
		//console.log("Converting from " + source + " to " + destination);
		return value * this.ratios[source][destination];
	};
	
	this.getBMR = function(sex, age, weight, occupationalIntensity, nonOcupationalIntensity) {
		var result;
		if (age < 10) {
			//console.log("Age: " + age + " is < 10");
			result = that.getBMRUnderTen(age, sex, weight);
		} else {
			//console.log("Age: " + age + " is 10+");
			result = that.getBMRTenAndOlder(age, sex, weight);
			
			var adjustments = that.adjustBMRForActivity(result.value, sex, result.tolerance, occupationalIntensity, nonOcupationalIntensity);
			result.upper = adjustments.upper;
			result.lower = adjustments.lower;
			result.value = adjustments.value;
		}
		
		return result;
	};
	
	this.getBMRUnderTen = function(age, sex, weight) {

		var sex_age_values;
		
		for (var i=0, count=that._lookup[sex].sex_age_values.length; i<count; ++i) {
			if (that._lookup[sex].sex_age_values[i][0] <= age) {
				sex_age_values = that._lookup[sex].sex_age_values[i][1];
			}
		}
		
		var result = weight * sex_age_values[1];
		
		//console.log("Under 10 BMR.  age: " + age + ", " + weight + " * " + sex_age_values[1] + " = " + result);
		
		result = {
			value: result,
			tolerance: 0
		}
		
		return result;
	};
	
	this.getBMRTenAndOlder = function(age, sex, weight)	{
		//console.log("Sex: " +  sex + ", age: " + age + ", weight: " + weight);
		var sex_age_values;
		
		for (var i=0, count=that._lookup[sex].sex_age_values.length; i<count; ++i) {
			if (that._lookup[sex].sex_age_values[i][0] <= age) {
				sex_age_values = that._lookup[sex].sex_age_values[i][1];
			}
		}
		
		var result = (sex_age_values[0] * weight + sex_age_values[1]) * 1000;
		
		//console.log("BMR " + result + " = (" + sex_age_values[0] + " * " + weight + " + " + sex_age_values[1] + ") * " + 1000);

		result = {
			value: result,
			tolerance: sex_age_values[2]
		}
		
		return result;
	};
	
	this.adjustBMRForActivity = function(bmr, sex, tolerance, occupationalIntensity, nonOcupationalIntensity) {
		//console.log("Adjusting: " + bmr + ", " + sex + ", " + occupationalIntensity + ", " + nonOcupationalIntensity);
		
		var adjustment = that._lookup[sex].activity_adjust[occupationalIntensity][nonOcupationalIntensity];
		
		var result = {
			value: bmr * adjustment,
			upper: (bmr + tolerance) * adjustment,
			lower: (bmr - tolerance) * adjustment
		}
		
		//console.log(result.value + " = " + bmr + " * " + adjustment);
		
		return result;
	};
	
	this.parseQuery = function(query) {
		//console.log("Parse query: " + query);
		
		var result = {
			type: "unknown",
			value: null,
			unit: null,
			raw_unit: null
		};
		
		var energyPattern = /^ ?(\d*\.?\d+) ?((kilojoules)|(calories)|(kj)|(cal)|(kcal))?$/i;
		var found = query.match(energyPattern);
		if (found != null) {
			result.type = "energy";
			result.value = Number(found[1]);
			result.raw_unit = found[2] || "";
			result.unit = this.synonymOf(found[2] || "");
		
			if (result.unit == "kJ") {
				result.kJ = result.value;
			} else {
				result.kJ = that.convert(result.value, result.unit, "kJ");
			}
			
			return result;
		}
		
		var timePattern = /^ ?(\d*\.?\d+) ?((hours?)|(hrs?)|(h)|(minutes?)|(min)|(m))$/i;
		var found = query.match(timePattern);
		if (found != null) {
			result.type = "time";
			result.value = Number(found[1]);
			result.raw_unit = found[2] || "";
			result.unit = this.synonymOf(found[2] || "");
			return result;
		}
		
		result.value = query;
		
		return result;
	};
	
	this.synonymOf = function(word) {
		word = word.toLowerCase();
		return (typeof this.synonyms[word] != 'undefined') ? this.synonyms[word] : word;
	};
	
	this.energy2ActivityHours = function(activity, kilojoules) {
		if (typeof that._activity_hour_kj[activity] == 'undefined') {
			return false;
		}
		
		return kilojoules / that._activity_hour_kj[activity];
	};
	
	this.activityHours2Energy = function(activity, hours) {
		if (typeof that._activity_hour_kj[activity] == 'undefined') {
			return false;
		}
		
		return that._activity_hour_kj[activity] * hours;
	};
	
	this.toDP = function(value, places) {
		var p = Math.pow(10, places);
		return Math.round(value*p) / p;
	};
	
	this.toClosest = function(value, grain) {
		var remainder = value % grain;
		var rounding = (remainder > (grain/2)) ? grain : 0;
		var result = value - remainder + rounding;
		//console.log("Rounding: " + result + " = " + value + " - " + remainder + " + " + rounding);
		return result;
	};
	
	this.humaniseTime = function(hours) {
		var minuteHourFraction = 1/60;
		var secondHourFraction = 1/(60 * 60);
		
		if (hours < minuteHourFraction) {
			return that.toDP(hours/secondHourFraction, 2) + " seconds";
		} else if (hours < 1) {
			return that.toDP(hours * 60, 2) + " minutes";
		} else if (hours > 24) {
			return that.toDP(hours / 24, 2) + " days";
		} else {
			return that.toDP(hours, 2) + " hours";
		}
	};
	
	this.getRMR = function(sex, height, weight, age) {
		/* set defaults */
		var sex = sex || 'male';
		var height = height || 175;
		var weight = weight || 70;
		var age = age || 40;
		
	    var rmrValues = this._lookup[sex].rmr;
	    return rmrValues[0] + (rmrValues[1] * height) + (rmrValues[2] * weight) - (rmrValues[3] * age);
	};
	
	this.getEnergyUse = function(activity, rmr, weight, hours) {
		var met = this._activity_METs[activity] || this._summary_METs[activity];
		return (1 / (((rmr) / weight) / 24)) * met * weight * hours * 4.184;
	};
	
	this.getActivityDuration = function(activity, rmr, weight, energy) {
		var met = this._activity_METs[activity] || this._summary_METs[activity];
		
		return energy / 4.184 / weight / met / (1 / (((rmr) / weight) / 24));
	};
	
	this.getActivities = function() {
		var result = [];
		
		for (var activity in this._activity_METs) {
			result.push(activity);
		}
		
		return result;
	};
	
	this.getSummaryLevels = function() {
		var result = [];
		
		for (var activity in this._summary_METs) {
			result.push(activity);
		}
		
		return result;
	};
};

export default EnergyConversion;