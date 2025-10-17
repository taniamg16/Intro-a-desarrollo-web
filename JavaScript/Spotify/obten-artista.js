async function obtenArtistaFijo(){
    const URL = "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb";
    const args= {
        method: "GET",
        headers: {
            Authorization:"Bearer BQD1Xa3B-C-6rOtsfOyyK1TfmHkhbc97O1JdrxVg-Bm7pgkacyAr9lx49HDSgQEcDT0A360ntwQK618yg8Tz6KT9tW_Ym_LCx1rFV_dQZjnj27Rz2-Q9eeFwpk2bljMf_p4mma3KFp8",
        }
    };
    
    const response = await fetch(URL, args);

}