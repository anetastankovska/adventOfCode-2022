// Calculates the value of the common chars
function calculateTotalSum(inputArr){
    let sum = 0;
    for(let i = 0; i < inputArr.length; i++ ){
        switch(inputArr[i]){
            case "a":
                sum+=1;
                break;
            case "b":
                sum+=2;
                break;
            case "c":
                sum+=3;
                break;
            case "d":
                sum+=4;
                break;
            case "e":
                sum+=5;
                break;
            case "f":
                sum+=6;
                break;
            case "g":
                sum+=7;
                break;
            case "h":
                sum+=8;
                break;
            case "i":
                sum+=9;
                break;
            case "j":
                sum+=10;
                break;
            case "k":
                sum+=11;
                break;
            case "l":
                sum+=12;
                break;
            case "m":
                sum+=13;
                break;
            case "n":
                sum+=14;
                break;
            case "o":
                sum+=15;
                break;
            case "p":
                sum+=16;
                break;
            case "q":
                sum+=17;
                break;
            case "r":
                sum+=18;
                break;
            case "s":
                sum+=19;
                break;
            case "t":
                sum+=20;
                break;
            case "u":
                sum+=21;
                break;
            case "v":
                sum+=22;
                break;
            case "w":
                sum+=23;
                break;
            case "x":
                sum+=24;
                break;
            case "y":
                sum+=25;
                break;   
            case "z":
                sum+=26;
                break;

            case "A":
                sum+=27;
                break;
            case "B":
                sum+=28;
                break;
            case "C":
                sum+=29;
                break;
            case "D":
                sum+=30;
                break;
            case "E":
                sum+=31;
                break;
            case "F":
                sum+=32;
                break;
            case "G":
                sum+=33;
                break;
            case "H":
                sum+=34;
                break;
            case "I":
                sum+=35;
                break;
            case "J":
                sum+=36;
                break;
            case "K":
                sum+=37;
                break;
            case "L":
                sum+=38;
                break;
            case "M":
                sum+=39;
                break;
            case "N":
                sum+=40;
                break;
            case "O":
                sum+=41;
                break;
            case "P":
                sum+=42;
                break;
            case "Q":
                sum+=43;
                break;
            case "R":
                sum+=44;
                break;
            case "S":
                sum+=45;
                break;
            case "T":
                sum+=46;
                break;
            case "U":
                sum+=47;
                break;
            case "V":
                sum+=48;
                break;
            case "W":
                sum+=49;
                break;
            case "X":
                sum+=50;
                break;
            case "Y":
                sum+=51;
                break;   
            case "Z":
                sum+=52;
                break;         
        }
    }
    console.log(sum);
    return sum;
}

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


// Gets the chars that are apperaring in both parts of the rucksack
function getCharsFromInput(input)
{
    let resultArr = [];
    let inputArr = input.split("\n");
    // console.log(inputArr)
    for(let i = 0; i < inputArr.length; i++ ){
        let arr = divideString(inputArr[i])
        resultArr.push(arr);
    }
    // console.log(resultArr)
    let totalCharsArr = [];
    let intersection = "";
    for(let i = 0; i < resultArr.length; i++ ){        
        intersection = resultArr[i][0].filter(e => resultArr[i][1].indexOf(e) !== -1);
        let str = intersection.join("");
        let parsedStr = Array.from(str)[0];
        totalCharsArr.push(parsedStr)
    }
    console.log(totalCharsArr)
    return totalCharsArr;
}

// Divide input strings into two substrings
function divideString(input){
    let resultArr = [];
    let splitted = input.split("");
    let middleIndex = Math.ceil(splitted.length / 2);
    let firstHalf = splitted.splice(0, middleIndex);   
    let secondHalf = splitted.splice(-middleIndex);
    resultArr.push(firstHalf)
    resultArr.push(secondHalf)
    return resultArr;
}


let input = `rNZNWvMZZmDDmwqNdZrWTqhJMhhgzggBhzBJBchQzzJJ
pHlSVbVbFHgHBzzhQHqg
nVsqGpbbtDtTNmrmfZ
zrBMnbzBchshsttfbMRBgmJggmmCHGgDhDgNDGHL
VddZqQqdvSQMJHJGdCDCDDmH
pZWWllPQlPZQvZvwpSVlqlvtfswMRzBbntzRbzbfstsRzF
NnjjRlnWNSWWbGwccbcchfPfTvfjfTBBpvmdMjTfvB
FVzJtDDJDqTMlmlM
gVQZlFLlzHhLGShGww
rPZtvtFrFPgWjQvCBlcqMzlqQC
QGVDJJnLnVTCJBczqqTM
fNSSnmLDSVLhhhSNSLhGSGfVPjrFHwmQwtwWFRWRjWPHrwgt
SvmlrVrCvmNhSSVZVCrsgqPfbwGFwwwsflbbGb
QHffdnHDDQdMGbgqPwztdPds
DjBjWHfQDfTQWTBfpMBQLVmmmcCCcVhCBBBhhCmC
trLHFFQHTLHJQrflfCnLLHrRfRRPqSRPbPbbsRGqqGqhjj
mcMpNWVVNmNVsSbSJPcGhPRR
NpzNgwzZDVNZVWNpHJQLQHtQrZQHrBCl
JVCMfgJVrJtMBhhrfVVfhVsjvpFGFgjSSgFdSGGqjvjvqF
mHllHlHpmWlDSFqbdSTS
nmZRLzQnWVpctMVpQs
BrvRzWBPWbRwGRjbbRGrtrfqjCJCjCJgJsZJscFCZcJC
MnnnVMVhTMQhsccVfwqFJgqf
mMShHHppQmHrrBzwtSbWwR
pWWGJMJJwlnZSqjWmvSWZC
gtHrLttDtgFjjqRZZCrjpp
bFtbTpHFHLbfLFbHVttccttddJGQdJzTwdTzJlMnMBwwJJ
JhqHFhVMzJPQcdcVncdc
NhgfwSjwCWwltSfnrnRWZdpcPrrRnp
NNhlltBjssNBgwLFFvDmDqLzHqBB
LnFrnddfrLnMFjWzpFhcWpjpFc
ntCwgtNggCqCgCqqPPltvcjjhvmWhmvDzTzDzD
lqlVQgVCSPVllVQSNGMHHrdQsHrJJBnMHHJf
ZGZcRZNWpcHZhJfbbNblrfrgllNr
stBMtzCCsHMfFQjfSSPgtt
qmszdsCzMncdGwdWZGvH
PccqPqbhvSvvvtWNjTtWsWcscp
gRwdDzHJQgHzfdRhgHRffzwsTTjTTCjNjssCpmWWDjtCLW
zdRMwdRHhGJwgHlnGGSFvvSrnSrr
rRpMJtPwrcCTNNQNMZQm
mDWdWVddbbbmBflFhvTHjjQjfZTgZgLLfH
bhBbFFnDVhdddFBhdmpJRrzStJmwnPzcsJ
RjlpRRWzzRGRmGzlCRRlQjCgtvTJTtJrTPttrWTwhFvvVJFT
bSBdLLqbcqcLndLHZNqcZdBDPrVTDDTJSFrJJvVthTwwDS
cqVsnBfHffVdqnZccGMmCsGzQmjsjlljgz
wMzJhLtwbnMWtHcFCCFqFNNbgq
fMlMfjrRRmdmGCGVVCHcVqcVTC
MmRRRlvmQWzpvnZpwJ
gRmgMRMmRwzzmwHbwcTNqPDVBbPTZVqPNZ
fWHphpGFpfJrrhPsNTNZVsNVhT
WGfJdvltJJfHrJpRgvMRMSwRznwMmw
htJFGsGspCppCFCGthCdpmJmgmWZfqqzWzlWcfgZHgzHlg
nwVMjVcVcWlbnBlfWB
wcNDTvPPDMFJLLppDGDD
hjCBgPbvMvmQDzlWnWjm
HrHtgZRRRNwczDWwwDzsQQWW
LpTqNtFtLFqHLHRrqgFHffVVBChvhhVPBCPhbPbp
CwpbCwjGqSjVllpGCllBfhZZRDPNcPPNvLLLDSDN
WshFFWsgTHsdMzQvPczLfLZDZRcLfR
rWsJQTMhWWHdsQTgsFJgllClVpqVbqnGblCppCVr
gRBSGcBDBSJSvPQwrTFLjggQTQ
HMMnHHHZfFVFrrMT
HhlhppCNcJzCTtBT
CCffCCmRLTsQRPHQQMPF
dWdbgcDSNclbbdwdSqHsvHPQPTPJplPMFMGJ
DWbDNcqZDSWSccNTVBCzVVfmBVZnVz
BnsrrvZwBsBSJrrrqSTgJQjCbCjgbCHDJgJFjQ
hLmGlnLmGWcjGDgfFFjQdF
hhWPmhPtczWpNRmppzRhLchMsnwZvTMZvVSwwrsNwSsBvr
tDCCltNVttJhNGlMPSWdqBqSjM
RFQcpcRTpFcnFzdLmLSWjMSSBLSQ
jwzzczpFbwnHcDCsthDJJsNbst
dLRWTHSwTmTwTcTWvQNVVQCvVvNFps
GnBPtBMJBPrjGGJMjrlqChNpNlsnhVFhQsVQ
JtMtGJfrJgDJjPjRTZLdFcRZRmwSDH
VSccPJSBLgZPDLDQ
zfpLMmLsHQGqgQHnDD
zdLLMssmrdfhddcVdJtScB
VvpTVQHSqSHSHqqHJVmRJVHpgDBwDgjcDDDgZjBZBjwBZbRw
PCdssGlstdWslFPfNPrtClGjwBgBJgJNwcjBjBgZwwMBJD
tlJldhdhdsdhTqSTqVQqQq
VGqTcTqbpPwrjfbl
BvntnZNNsLZvLszSnCsvJthlfjTrZwlrjrpPlwlhfwrl
QBtNtJLvTsFdQcqWmQRR
fjcjhmjBvcvcSvcZ
HMwZtRQQpGGRgzMvLnWWnbLlSntlbv
JQPzzJHqQRqGMMQwHwzDZZhmmPfjDjmjsCZhPj
cBlZZMfBrCBMwBMCvQzTwFbQzPnbwjTbTg
WtzpVDzmtthzGFQTbTThnnTQQg
sGWstpHdpGDmdHdmGmmmJNstRMrCcBSfBSzNBNRrSRNMcMMv
mMPDVBZZLSmRdcFpjr
fggGGfbfgQStjjsdbtdt
gNqQgCQlNCCJgJHvnvnHMjPHjv
bLsRQrQsGQbLrbRZMGgbJJBJFtlFFngJphhcfBBq
jjdHCCjfVNmmmNDFcBcpBthcplFDFq
jmvvmWVjjHTCVvNjSbQGLrRzwMWsMRwfGG
sJNCsCFFCNPhCzlrSvRrvwhRjj
MMGMTwpMHGzrGczzlG
qVmwgHtDtmCdWCsNFmNJ
fmhWhjVjNpqRRJjwRw
gnGQGDDCgSsCvPlvPgnPgnPtwqbpHRHqHdJpzpQJJJRJRF
wgPGsDGPsZgGgBmBWNZNfLWWrZ
WdsCVtjWWWHRRqLLHncC
fbSpMSPSZHRRcqlpRc
cGMmJmfMPPPccZMNQPWvjTtdTjvgmdtTsggw
tPBQhHWBtQHgWQCtLwddcGnfpGpwwnbhVb
vqQzTNJJJTvRrTNFJsZrrzFlbbfcnVbbcwmGGGpVzmddcdfd
NSSqJvFFFFFQjQCjQDSDPD
rQZnVVrZmZmgSWqHrSzHPC
LGFLwcMBcllBjFNwGjltggSqSWCCzvNgSqSHtt
wdhqqGBwwqGMcDhcwdFFbbJppZbssbfZQsQsdVQm
lqBZlsjVTbVqmFrSnTFSvwncPP
zQztHfZQtWLJzPFnnQScFcFrvS
ftHJWHhfttHWffhtgLNfZDWbdqBqjbVssBDCqCdCsmClGG
MlbWFTJQFbFFzRdNjNtjdtBT
srwnrsLVHzQPQsjjSQ
gLpnwgnwnHCvcHHcvwgCvGFFhWGmFmqMMbQFQFFhlGmJ
qqNcJgJccdqhsqgsggdgqgcrtfNWNZzVbvVFzttMfzbVMZ
GLlpPpCpwPLDGvrFVWrWWbZt
DlRCDDLSjTjDjSRSjPClwnwSHHHQmmQvTJcQgvddHsqdcgmB
jmRjRbRQLLZbPnbrcTTHHHNn
MfhhmmwtvStrpnJJHc
fgqlvfhvFzMwqfvMfFWlmMvLZsdQsZVdCdLZdGQjRzdQjD
lTPcDlVdTlVVMSDfTJccVzdlmMgGBmppgBmnHGHqHqQqqQMH
ZRjWFPsLNLLrPhWNtnBBvnpGpHGpQmHnmR
CtwssCNLrsZWjrjcbfPzwJJJffDbTl
cjMvvqpJFqhShNCRQR
ldtDgQZDPdzztLZgPTtfbnStfBSbNNSbnbhhSS
TDsrzsZZZTFHmVHjcsQW
BQmQchrmBddcmZZdpSgrpswWWswVsnnnDJVnnZFnGN
TfStMPLTHvbvRVGnHGsNnJWFNV
qtvMRMMPbbPMLqRPvRTRzMjSSmprpQdBchlmmgldgjzm
nRRnvNPhrbZDLjvS
HCszMwcHHcLDrbQDWr
ptszqwdMbnnhPBqN
QbzhhfbFhBbpbzwwLjLJjSjltL
mNndGrSStHJTJLln
rDMMNVWdVpCbSbSp
tDTSTSTTTTJDwqjWqBWttdjg
nNPmVfnGfPNVLmNzfnzPVFMjdpBwWZwZHwBLBqgjqpWH
dfGPfVQGVPhGzlmnzSvsSTDJhTbTTrrSRD
ZfgtZBptBfRQNQggjjrjjwmwsQJPzrwm
TwTGGwTwzzsJzTsH
lFvwqFLhFMnqcLlVLMLfptNWppppDBDbDfbFgW
mjftBfVPjttmjcSjcPttzJlvnrwvTRrTnvwvlRrHHTHRTR
WZDWDNLFWbZbcMDWGZDbNdMCRsnTdTvdnqrHCTrvsRRvwC
DQFZLNNgtBJQcBzJ
HbZQZFVbQVpQplQZGbGchDffltfLtmdgDjggTmtm
zWzRCdnCRBRdJrzDjLhDthjLJTTtjq
CPPnwSrRdRSzCGMcZZZMwFwMZF
WBQqNQnQllwnWQlvBBMlljHTqqFdGfmTdFfcFTFFcqmP
rsRRVrZhrzbtpZRRhFDmPvfFFrfTdFHGvc
VtSCtSLbtsZVtttthCbJSWSlJlwJQggWWglvwW
QfFLWCvRfSLFCtvtFhNcqDDcGVbhGcqh
ZVgrdZZPPZZzPwdjzZhmccsqJGqDdsDDNddD
pzzwpgZzZZTznZnjZZzPVRLQLlvfSlQRSpWlCvtSQv
RtcHhRMcrHhBrrTNDVBNLqLqQqfBPm
wCbWzWbvdWCjbWppmtmNmqmLLsfsNV
lwjWdbztgHTgggnnnR
flBbzbMfbrTlrMvBCcwPggdmcdmg
VDVVRFZRZSFFhQLSGFQhjSVZCgpvPwLCzpdWWzccwdvvvwcC
hDHRGQVHHQVRZSQGbqqfNTlbHzrbbsqb
MTFdTsZpPTcMpFCPdCBmMBmRfRGBmQgQRRgt
vbDSwvhzznnbbhDWnvSzRBgQQLgLQltqtqlmwfGB
jVjhfSnNDNbzzWzjWSjrCFNpcHdpTTJddJFpsJcc
ZrrZPHfChPdDPVVdDq
vFmsbTsmSbbBJssmSBvTmmnTrnrwlWqwVlLrVTLLTWqL
JrFbpsvFBMBmzBzFStcRhjZjfCCpZNCtct
TGgRrTggwwtvtQtdCdQNqN
sJHZJVZHDBpFBZBBNzNdhzdpSzddvqhN
VZcvFsJVFvsmvssbcnrwbrnGMbMlRn
SdcdWzMJdSMWMddZJdVcmBmwrwqrrnVnVNtr
mlQHCfgbjsfQTbfCBNtVhVnntVBnVh
HLDslDDmblgHfvLHPJFSZPpDFpFFpdPS
qNqPNJvcSzGGPQnGQp
bWhbgsshZWBhltthhbWtCsZNjrzpnQnnznnjtQFrjGjVFGnn
bRDNddhNdDsZdNChmvDmmwqqvLqwSJDq
TnSfPnCSmnSgpSTmfLzfMFLWFJJLWWsBsr
jdQjcdqDVVwDcPsPzMRJMLqPqR
PGhGchjhtZlTGTHCCb
ZZRrJJqSqJwNFFphsGsLPJ
blcMCflvTTPFFNpVvsFv
CcTlltTmtmMdmCmnlllBDDSDQSwSjRDQSdswjR
MCCPNsnQFWbvvTPF
CcCVJJhjVJZRtcCclDDlbcbTcGFFDz
HpjtVwVZfpjJVhZgCVtLmrBwdMrLsNNsMmdLqB
TJTDTnrFzzdWgWGJSSMJwg
LhPVttjtLmsPqqqVsVpsjLlgWlwHvGnlHWlgHlGgwvlP
mQshLhmsnsqZcqhZqpshsLVpNTNbBfzTRBQdFRzNNFBTdbzR
ZGqMLGqvJsJsMJmd
PDVQPfPcrrcFrrzrTdgCjSSCzgszmlJjBj
PfRtVfttVcWtVJrfbGqvwqLpRRwvpppH
HmLmMSnnWnrTrnvpqFCHVGfzVFVHQj
ttsstRhhcNwbswNtdwsdNPFfjzQppQPjfGGfQVPCpR
bbsDNtDcbhstsSZLDmSSgCmnSS
tfwBBLcJVrDnqvLv
zmWWJRZhWRRRGRNdgSZGgWTvpnjvrDqvpHjjzrpnrPDnHj
NdJmSGZWRhRNsghWTJmdGfQCtllCcFMwffBftsfMQc
lTLgTghpGZJDBrnGWnnm
VlRwlHttwqmHHbDWHJ
twldzCvsRdsFFtRtSczTjSgMcfSpSzTM
pBpMBTcSlNtMcTfFCmbPDzCDLb
JgrjjJqhGZQrQrZhnJGDDCZfvPDdDzFFdzfmZL
QHhqqnrVJJPhHrnGQgwMNwMMctcWRWSBMNtNsW
FJrlhpcfDCcFWpNpwWwjNQwz
RTTvPdbjWzMbnNNM
GRZTGggGgtvjGcqrBcttcDlFhr
pMRVdVbbMMMSdWWqHpCTvTjnBBBFFGGB
smNfZgcsNrcmzggZszsgRnPGFHjBPTBTjGjPTBNj
RmwgsmgfrzzsZtfgZLQQSVWlwbdMhlwdqQ
mRRjPmLrrSmzSczSzPgVZFpTCpZCMWrZQMQrZJZT
BvdbHNdnJtvBDbqqdBlvwvqpDQMpZQFMCsQCspZTMMCZCF
nBlfbfbndJBHPfLRfmhhhhPL
ScJDFBNLLbVRqVfZ
rWrgmdMgnnBhBtnntf
CwBWWMgCwddCgwsQjsrvNvlTJzSNHwNTHFJHzS
vnddCrNpCgtjLdSdgCgCCvLnWqDhWBQhHqQHDqBhQHDHNNDl
wPTVfVTJmZGJVJGffZBwHMWlWlHlWtbQDqbl
mGsJVVJsTVTTmtJVzzTJjdSjjprzCvpSLSCjdnLg
zLNggsVHmNNsssLmwzLQZLwDRvGQBqGGDDBBvvDBDqPhRG
WrCjbtJdbFhBRglGgjqv
JWCJcWcSdWcctnJCcJJJbcbmzwwznmgLzNzmLHmHZMwsZL
JRRDNNhhszMTzNMwCG
MnHPqmgmHjPnnvjqdmjFLQwLwTLwzTwTdGLCzS
BnPPZqmcfqgqnnZmBmqjqhfWVJlRMlhWlRDlVsssbh
nmTLTqsvqnwqsvwDPnLHdNVrMMHHCBlmVdmGNV
RgRpcJhQRfQZcJbWhQpBHCjVCdjCVGdddMllHp
fczbZhzbtcZfgRRBcWSPPwFsLSDswSwTsSzw
rbFpzFCVBrrBZCjbCzHHBVdJllGDLsLrDtsswswstGJs
QNhNNnNnnQhNWSnRhnJtdpJpJtMDGsGLLtsQ
ScmRvNRNnWWvNvNvfpTccjVZbqgZgVzqHjCjTVTVVq
BTppwCwBpwwBqnjlHcLBTHnbbSbDthsSSJgsnDDRgJRD
FVGzzvrdMGSSsdtZtZgd
QvQtvtGFlBLLjLQL
gsWWsNMjwgPMPWnMjShHHZSZbmZbbmTSnb
rlCvVQrCfqffpVjQRqCCvDDTTTmmZhZTmZhThFmhhZZhqb
CDDVJpVfrJJVJLMNzMwWwLwj
nHrcsZrssPcBPtQJLJtQQCZQpV
GFWzNzNFdNbTMMqbGTqTqzqqdLCpfDQCtRVVCLtdCfQsdCCt
TlNqGTWFNmMMszhGsmFTWGFzwHnvSjgPgvgSjllBvBnvwPBB
mpMggjgMlmtjtGMwZpcSscBlcsSblhsfSdfs
zzPVDRrLrCTQNCzNRTVFNLhBhBSqdQbcfSsJBJdbjJfB
RPTRPTVNTFzVrHVDCrTHmHtwMvwWMmtwmGjWgvGv
rLMcvfHVfMgLFvfNnBBzwRbBwnrGNs
dttJjJCtdjmwzwBCRRCqcs
TddDQDJDtQJtcJFpPQHPQMvfQlFL
LQSqqpqTCSJcsDcqQMMhnnjMjppZhwHZbZ
NRtvtmgmvdBffgtVCBWVRgFbPzHbMHbnwwjMPZfHbPjzPP
RNtvCvNdgtNNmldgvCFRNVLsQLqJcQGJJrccGSlDLDLr
GdwwqqqwGVtjdPvTCplbHTPbPzPTpp
RpLmLLpFfNsgTzclhzClThgH
ZFsWZLFZJsNsnWsnRsRfnfJQGBttjdGJjBvvwjdpjjttvj
tfPzzLrrdrQlTlvn
qJRBhNhNGVRBFRTlnJvCmvmJPCCl
VVPDNchNMVFGRMFcRVBjsZZcttSLSZzzStcWtZ
pTrwTrnjtttjprTSTNTQfcjcgPsPZfPgjdgdsQ
mCmCzvzhmJDHzJDbhFCDPsgddcsfcdsbdgVRpdVs
zqJzFCDhmqvGhMmCvmGhMCGJnSlnllSBLllLMtNpWtpNBnlt
JBhJrFLhGrnJZrlcbffndnggfggf
jqmWMGGSsqCsmpjmsDQzlcHgbtdzjjlVfctjHV
GWSmSCspCsMSpRmSmqMMCBvFLJLhTTwFhRFLLBTwrv
BCdWccqcqpQqrsNgGsWMgfNW
lFttLzzLwnfsLrsNsNLG
zjNlznlwvRPZnltwvPFnZRCbmjCcqjpcpQcqVVdbdVBm
CwTbbCGNFHtHwwjSjJpzjLMdMMzT
rscqqVvWgWrZMjrlmSzzmLrM
WPqqZnPqgncnBQQVRbCDwRHGSFHPwRNw
ZQnZwWjFvdsHwBJltfmfSlsqlJ
gPprhMDTpMpPMVNqNRqNlJhltJdJ
pLGCcCrgppCrVcMpdzjvzvjLwQQzFjwzHF
NmmmvfqcvmLSQhCLvtvL
TVlWTZVJZJsFbwWbQQhtQgLFCnSgghLt
hZJTJZhwZlRJrJWHVlblMBffmqfdNMjdGdBBqqcH
GJJfLfptGqqqnsVqVVjjDnNc
mZPSvPmBCdmwdCLDshSbRnnDDhRL
gvBrBvPBPPZCTLZmwmrgQdwfTJMHGzHfWffJzFzttHWFzW
sBMvmzWzmFmNWJfffZNLfbqZbtZq
jRQVRnhhppnVhjgnDLttLqbLqLQfDLss
jRRgpGVGhwhnspgpRppwSnBvMMcWvGczGJJHdmHJmJFF
VCLHFwHMhLghHHWhFFgWNMMVzmdmbvWdJqBPJPPBppqmBdzm
SRTsjGZTsZZnSnGZGqdBmrqPvmqqqsPpmv
GvQSGtZSQllVhtLMcLLNMH
GsNdWpdVWGSHjFCWCqFFgqngvW
mRQTcrLRmZTPRLPZfqqqHbDDDgFvFnvqzQ
hfZHrwwmcZRwlLfwlmrRjMJJsVjslVNBGNjpVBBG
pllpztRqBBvvGPpG
QQhhZQbVcZQTPMWWGbvvbMHM
cwgCQCLZChQwwLZVzCrzzqNCzrDqdFPF
bgcLPvvpcbdsbpSsHRTCqsRfWfsHRm
lZlQtthrnlVMmTHqqqqHSChB
rDtlzttnlSNrMtQjZVrcgGDLLddcdcpPgPGJJd
jvGbvLLQDSGlRmmSLjlDmRQggFBrMCwWdsBFWBFjdrrWrr
PpTfcPZpNTVNpHzTzzzpPJhBcwrrhFsrMdFcMCBFhgMF
JTTqdtfzfzJpqffNdTTHGtQRnmDQGGLQQlQRbblD
CQQCshCMwgQhMdjWJFBPpbjgmmWj
SNNvcGNSZSTDtGDcczJJBmzbjBJjmppbppms
cDtfDVNTGGGNNrwLLwHdqLhfLs
ngghZCChzhNjjNbbJfdh
slPPRLlBBlVRMvRllLLHvcpcdFfJjvdFpfHfcZ
RDZPZBLmPVWDVrQtnzSTmgTwmTSg
`;

let transformedInput = getCharsFromInput(input);

// let final1 = calculateTotalSum(transformedInput);
// console.log(final1)

function convertInputToArray(input)
{
    return input.split("\n");
}

function convertToChunks(input)
{
    let inputArr = convertInputToArray(input)
    let resultArr = [];
    let tempArr = [];
    let i = 0;
    while(i < inputArr.length){
        tempArr.push(inputArr[i])
        tempArr.push(inputArr[i+1])
        tempArr.push(inputArr[i+2])
        resultArr.push(tempArr);
        i+=3
        tempArr = [];
        console.log(i)
    }
    return resultArr;
}


function findMatch(input)
{
    let resultArr = []
    let chunkedArr = convertToChunks(input)
    console.log(chunkedArr)
    for(let i = 0; i < chunkedArr.length; i++ ){
        findPriority(chunkedArr[i])
        resultArr.push(findPriority(chunkedArr[i]))
    }
    console.log(resultArr)
    return resultArr
}

function commonChar(arr)
{
    let string1 = arr[0]
    let string2 = arr[1]
    let string3 = arr[2]
    let duplicateCharacter = '';
  for (let i = 0; i < string1.length; i += 1) {
    if (duplicateCharacter.indexOf(string1[i]) === -1) {
      if (string2.indexOf(string1[i]) !== -1) {
        duplicateCharacter += string1[i];
      }
    }
  }

let duplicateCharacter2 = ""
  for (let i = 0; i < duplicateCharacter.length; i += 1) {
    if (duplicateCharacter2.indexOf(string1[i]) === -1) {
      if (string3.indexOf(duplicateCharacter[i]) !== -1) {
        duplicateCharacter2+= duplicateCharacter[i];
      }
    }
  }
  
  console.log(duplicateCharacter2)
  return duplicateCharacter2;
}

function process (extractesChars) 
{  let result = ""
    for(let i = 0; i < extractesChars.length; i++){
        if(extractesChars[i].length > 1){
            let temp = extractesChars[i].split(",").join();
            result+= temp
            temp = ""
        }
    }
    // console.log(result)
    let resultArr = result.split("")
    console.log(resultArr)
    return resultArr
}

function findPriority(subArr){
    let priority = 0;
    for(let char of subArr[0]){
        if(subArr[1].includes(char) && subArr[2].includes(char)){
            priority = alphabet.findIndex(el => el === char) + 1
            break;
        }
    }
    console.log(priority)
    return priority
}

let a = findPriority([
    `vJrwpWtwJgWrhcsFMMfFFhFp`,
`jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL`,
`PmmdzqPrVvPwwTWBwg`
])

let arr = findMatch(input)


function finalProcess(inputArr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        if((!isNaN(arr[i]))){
            arr.pop(arr[i])
    }
}
console.log(arr[1])
}

finalProcess(arr)

let input2 = `rNZNWvMZZmDDmwqNdZrWTqhJMhhgzggBhzBJBchQzzJJ
pHlSVbVbFHgHBzzhQHqg
nVsqGpbbtDtTNmrmfZ
zrBMnbzBchshsttfbMRBgmJggmmCHGgDhDgNDGHL
VddZqQqdvSQMJHJGdCDCDDmH
pZWWllPQlPZQvZvwpSVlqlvtfswMRzBbntzRbzbfstsRzF`

let b = findMatch(input)
console.log(b.reduce((a, b)=> a + b, 0))

