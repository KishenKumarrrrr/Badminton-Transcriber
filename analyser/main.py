import re

def main():
    f = open("r1-set2-ls.txt", "r")
    map = init()
    for line in f:
        processLine(line, map)
    printMap(map)
    return

def init():

    map = {
        "s_att-de" : {
            "narrow" : 0,
            "wide" : 0,
            "body" : 0,
            "error" : 0
        },
        "s_att-ad" : {
            "narrow" : 0,
            "wide" : 0,
            "body" : 0,
            "error" : 0 
        },
        "ad_r" : {
            "fh_dd" : 0,
            "fh_dm" : 0,
            "fh_ds" : 0,
            "fh_cs" : 0,
            "fh_cm" : 0,
            "fh_cd" : 0,
            "bh_dd" : 0,
            "bh_dm" : 0,
            "bh_ds" : 0,
            "bh_cs" : 0,
            "bh_cm" : 0,
            "bh_cd" : 0,
            "error" : 0
        },
        "ad_m" : {
            "fh_dd" : 0,
            "fh_dm" : 0,
            "fh_ds" : 0,
            "fh_cs" : 0,
            "fh_cm" : 0,
            "fh_cd" : 0,
            "bh_dd" : 0,
            "bh_dm" : 0,
            "bh_ds" : 0,
            "bh_cs" : 0,
            "bh_cm" : 0,
            "bh_cd" : 0,
            "error" : 0
        },
        "ad_f" : {
            "fh_dd" : 0,
            "fh_dm" : 0,
            "fh_ds" : 0,
            "fh_cs" : 0,
            "fh_cm" : 0,
            "fh_cd" : 0,
            "bh_dd" : 0,
            "bh_dm" : 0,
            "bh_ds" : 0,
            "bh_cs" : 0,
            "bh_cm" : 0,
            "bh_cd" : 0,
            "error" : 0
        },
        "de_f" : {
            "fh_dd" : 0,
            "fh_dm" : 0,
            "fh_ds" : 0,
            "fh_cs" : 0,
            "fh_cm" : 0,
            "fh_cd" : 0,
            "bh_dd" : 0,
            "bh_dm" : 0,
            "bh_ds" : 0,
            "bh_cs" : 0,
            "bh_cm" : 0,
            "bh_cd" : 0,
            "error" : 0
        },
        "de_m" : {
            "fh_dd" : 0,
            "fh_dm" : 0,
            "fh_ds" : 0,
            "fh_cs" : 0,
            "fh_cm" : 0,
            "fh_cd" : 0,
            "bh_dd" : 0,
            "bh_dm" : 0,
            "bh_ds" : 0,
            "bh_cs" : 0,
            "bh_cm" : 0,
            "bh_cd" : 0,
            "error" : 0
        },
        "de_r" : {
            "fh_dd" : 0,
            "fh_dm" : 0,
            "fh_ds" : 0,
            "fh_cs" : 0,
            "fh_cm" : 0,
            "fh_cd" : 0,
            "bh_dd" : 0,
            "bh_dm" : 0,
            "bh_ds" : 0,
            "bh_cs" : 0,
            "bh_cm" : 0,
            "bh_cd" : 0,
            "error" : 0
        },
        "s_def-de" : {
            "fh-1" : 0,
            "fh-2" : 0,
            "fh-3" : 0,
            "fh-4" : 0,
            "fh-5" : 0,
            "fh-6" : 0,
            "bh-1" : 0,
            "bh-2" : 0,
            "bh-3" : 0,
            "bh-4" : 0,
            "bh-5" : 0,
            "bh-6" : 0,
            "error" : 0
        },
        "s_def-ad" : {
            "fh-1" : 0,
            "fh-2" : 0,
            "fh-3" : 0,
            "fh-4" : 0,
            "fh-5" : 0,
            "fh-6" : 0,
            "bh-1" : 0,
            "bh-2" : 0,
            "bh-3" : 0,
            "bh-4" : 0,
            "bh-5" : 0,
            "bh-6" : 0,
            "error" : 0
        }
    }

    return map

def printMap(map):
    print("s_att-de:")
    print("narrow: ", map["s_att-de"]["narrow"])
    print("wide: ", map["s_att-de"]["wide"])
    print("body: ", map["s_att-de"]["body"])
    print("error: ", map["s_att-de"]["error"])
    print("\n")
    print("s_att-ad:")
    print("narrow: ", map["s_att-ad"]["narrow"])
    print("wide: ", map["s_att-ad"]["wide"])
    print("body: ", map["s_att-ad"]["body"])
    print("error: ", map["s_att-ad"]["error"])
    print("\n")
    print("ad_r:")
    print("fh_dd: ", map["ad_r"]["fh_dd"])
    print("fh_dm: ", map["ad_r"]["fh_dm"])
    print("fh_ds: ", map["ad_r"]["fh_ds"])
    print("fh_cd: ", map["ad_r"]["fh_cd"])
    print("fh_cm: ", map["ad_r"]["fh_cm"])
    print("fh_cs: ", map["ad_r"]["fh_cs"])
    print("bh_dd: ", map["ad_r"]["bh_dd"])
    print("bh_dm: ", map["ad_r"]["bh_dm"])
    print("bh_ds: ", map["ad_r"]["bh_ds"])
    print("bh_cd: ", map["ad_r"]["bh_cd"])
    print("bh_cm: ", map["ad_r"]["bh_cm"])
    print("bh_cs: ", map["ad_r"]["bh_cs"])
    print("error: ", map["ad_r"]["error"])
    print("\n")
    print("ad_m:")
    print("fh_dd: ", map["ad_m"]["fh_dd"])
    print("fh_dm: ", map["ad_m"]["fh_dm"])
    print("fh_ds: ", map["ad_m"]["fh_ds"])
    print("fh_cd: ", map["ad_m"]["fh_cd"])
    print("fh_cm: ", map["ad_m"]["fh_cm"])
    print("fh_cs: ", map["ad_m"]["fh_cs"])
    print("bh_dd: ", map["ad_m"]["bh_dd"])
    print("bh_dm: ", map["ad_m"]["bh_dm"])
    print("bh_ds: ", map["ad_m"]["bh_ds"])
    print("bh_cd: ", map["ad_m"]["bh_cd"])
    print("bh_cm: ", map["ad_m"]["bh_cm"])
    print("bh_cs: ", map["ad_m"]["bh_cs"])
    print("error: ", map["ad_m"]["error"])
    print("\n")
    print("ad_f:")
    print("fh_dd: ", map["ad_f"]["fh_dd"])
    print("fh_dm: ", map["ad_f"]["fh_dm"])
    print("fh_ds: ", map["ad_f"]["fh_ds"])
    print("fh_cd: ", map["ad_f"]["fh_cd"])
    print("fh_cm: ", map["ad_f"]["fh_cm"])
    print("fh_cs: ", map["ad_f"]["fh_cs"])
    print("bh_dd: ", map["ad_f"]["bh_dd"])
    print("bh_dm: ", map["ad_f"]["bh_dm"])
    print("bh_ds: ", map["ad_f"]["bh_ds"])
    print("bh_cd: ", map["ad_f"]["bh_cd"])
    print("bh_cm: ", map["ad_f"]["bh_cm"])
    print("bh_cs: ", map["ad_f"]["bh_cs"])
    print("error: ", map["ad_f"]["error"])
    print("\n")
    print("de_f:")
    print("fh_dd: ", map["de_f"]["fh_dd"])
    print("fh_dm: ", map["de_f"]["fh_dm"])
    print("fh_ds: ", map["de_f"]["fh_ds"])
    print("fh_cd: ", map["de_f"]["fh_cd"])
    print("fh_cm: ", map["de_f"]["fh_cm"])
    print("fh_cs: ", map["de_f"]["fh_cs"])
    print("bh_dd: ", map["de_f"]["bh_dd"])
    print("bh_dm: ", map["de_f"]["bh_dm"])
    print("bh_ds: ", map["de_f"]["bh_ds"])
    print("bh_cd: ", map["de_f"]["bh_cd"])
    print("bh_cm: ", map["de_f"]["bh_cm"])
    print("bh_cs: ", map["de_f"]["bh_cs"])
    print("error: ", map["de_f"]["error"])
    print("\n")
    print("de_m:")
    print("fh_dd: ", map["de_m"]["fh_dd"])
    print("fh_dm: ", map["de_m"]["fh_dm"])
    print("fh_ds: ", map["de_m"]["fh_ds"])
    print("fh_cd: ", map["de_m"]["fh_cd"])
    print("fh_cm: ", map["de_m"]["fh_cm"])
    print("fh_cs: ", map["de_m"]["fh_cs"])
    print("bh_dd: ", map["de_m"]["bh_dd"])
    print("bh_dm: ", map["de_m"]["bh_dm"])
    print("bh_ds: ", map["de_m"]["bh_ds"])
    print("bh_cd: ", map["de_m"]["bh_cd"])
    print("bh_cm: ", map["de_m"]["bh_cm"])
    print("bh_cs: ", map["de_m"]["bh_cs"])
    print("error: ", map["de_m"]["error"])
    print("\n")
    print("de_r:")
    print("fh_dd: ", map["de_r"]["fh_dd"])
    print("fh_dm: ", map["de_r"]["fh_dm"])
    print("fh_ds: ", map["de_r"]["fh_ds"])
    print("fh_cd: ", map["de_r"]["fh_cd"])
    print("fh_cm: ", map["de_r"]["fh_cm"])
    print("fh_cs: ", map["de_r"]["fh_cs"])
    print("bh_dd: ", map["de_r"]["bh_dd"])
    print("bh_dm: ", map["de_r"]["bh_dm"])
    print("bh_ds: ", map["de_r"]["bh_ds"])
    print("bh_cd: ", map["de_r"]["bh_cd"])
    print("bh_cm: ", map["de_r"]["bh_cm"])
    print("bh_cs: ", map["de_r"]["bh_cs"])
    print("error: ", map["de_r"]["error"])
    print("\n")
    print("s_def-de:")
    print("fh-1: ", map["s_def-de"]["fh-1"])
    print("fh-2: ", map["s_def-de"]["fh-2"])
    print("fh-3: ", map["s_def-de"]["fh-3"])
    print("fh-4: ", map["s_def-de"]["fh-4"])
    print("fh-5: ", map["s_def-de"]["fh-5"])
    print("fh-6: ", map["s_def-de"]["fh-6"])
    print("bh-1: ", map["s_def-de"]["bh-1"])
    print("bh-2: ", map["s_def-de"]["bh-2"])
    print("bh-3: ", map["s_def-de"]["bh-3"])
    print("bh-4: ", map["s_def-de"]["bh-4"])
    print("bh-5: ", map["s_def-de"]["bh-5"])
    print("bh-6: ", map["s_def-de"]["bh-6"])
    print("error: ", map["s_def-de"]["error"])
    print("\n")
    print("s_def-ad:")
    print("fh-1: ", map["s_def-ad"]["fh-1"])
    print("fh-2: ", map["s_def-ad"]["fh-2"])
    print("fh-3: ", map["s_def-ad"]["fh-3"])
    print("fh-4: ", map["s_def-ad"]["fh-4"])
    print("fh-5: ", map["s_def-ad"]["fh-5"])
    print("fh-6: ", map["s_def-ad"]["fh-6"])
    print("bh-1: ", map["s_def-ad"]["bh-1"])
    print("bh-2: ", map["s_def-ad"]["bh-2"])
    print("bh-3: ", map["s_def-ad"]["bh-3"])
    print("bh-4: ", map["s_def-ad"]["bh-4"])
    print("bh-5: ", map["s_def-ad"]["bh-5"])
    print("bh-6: ", map["s_def-ad"]["bh-6"])
    print("error: ", map["s_def-ad"]["error"])
    print("\n")
    return

def processLine(line, dict):
    matches = re.findall("\([^)]*\)", line)
    for match in matches:
        try:
            match = match[1:-1]
            tokens = match.split(",")
            if tokens[0].strip() == 's_att':
                key = tokens[0].strip() + '-' + tokens[1].strip()
                dict[key][tokens[2].strip()] += 1
            elif tokens[0].strip() == 's_def':
                key = tokens[0].strip() + '-' + tokens[1].strip()
                if (tokens[2].strip() == 'error'):
                    secondKey = tokens[2].strip()
                    dict[key][secondKey] += 1
                else:
                    secondKey = tokens[2].strip() + '-' + tokens[3].strip()
                    dict[key][secondKey] += 1
            else:
                dict[tokens[0].strip()][tokens[1].strip()] += 1
        except:
            print("Error!: " + match)



if __name__ == "__main__" :
    main()