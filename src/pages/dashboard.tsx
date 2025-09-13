import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowBigDown, ArrowBigUpIcon, BarChartIcon, BrainIcon, ChartArea, ChevronLeftIcon, ChevronRightIcon, Database, FolderIcon, HandIcon, LockIcon, PersonStanding, UtilityPole,  } from 'lucide-react';
import { ChartAreaInteractive } from '@/components/ui/ChartAreaInteractive';
import { columns } from "@/components/ui/Components"
import type { Payment } from "@/components/ui/Components"
import Navbar from "@/components/ui/Navbar"
// import { DataTable } from "@/components/ui/Components"
export default function Dashboard() {
   type Status ={
    id: string
    amount: string
    status: "Pending" | "Processing" | "Success" | "Failed"
    email: string
   }

   const status: Status[] = [
    {
      id: "1",
      amount: "$100",
      status: "Pending",
      email: "mathiasonyebuchi13@gmail.com"},
      {
        id: "2",
        amount: "$200",
        status: "Processing",
        email: "mathiaschrisopher16@outlook.com"
      },
        {
            id: "3",
            amount: "$300",
            status: "Success",
            email: "chrisonetwotech@gmail.com"
        },
        {
            id: "4",
            amount: "$400",
            status: "Failed",
            email: "chibuzorcrescent34@yahoo.com"
        }
   ]


  return (
    <>
    <style>
        {
            `
            .amt::after{
            content: "";
            position: absolute;
            width:70vw;
            height:2px;
            background: gray;
            top: 35px;
            left:-10px;
            opacity: 0.3;
            }
            
            .infotd:hover{
                background-color: #f3f4f6;
                width: 70vw;
                 
                
            }
            .asideinfo{
            
            transition:700ms;
            }
            .asideinfo:hover{
                background-color: gray;
                border-radius:10px;
                color:white;
                // width:90vw;
            }
         
            .asideinfo1::after{
            content:"";
            position:absolute;
            width:0px;
            height:3px;
            background:black;
            left:10;
            top:140px;
            // right:30px;
            transition: width 700ms ease;
            border-radius:10px;
            }
             .asideinfo:hover::after{
             width:110px;
             }

            .asideinfo2::after{
            content:"";
            position:absolute;
            width:0px;
            height:3px;
            background:black;
            left:10;
            top:235px;
            // right:30px;
            transition: width 700ms ease;
            border-radius:10px;
            }
             .asideinfo2:hover::after{
             width:110px;
             }


            .asideinfo3::after{
            content:"";
            position:absolute;
            width:0px;
            height:3px;
            background:black;
            left:10;
            top:330px;
            // right:30px;
            transition: width 700ms ease;
            border-radius:10px;
            }
             .asideinfo3:hover::after{
             width:110px;
             }


            .asideinfo4::after{
            content:"";
            position:absolute;
            width:0px;
            height:3px;
            background:black;
            left:10;
            top:425px;
            // right:30px;
            transition: width 700ms ease;
            border-radius:10px;
            }
             .asideinfo4:hover::after{
             width:110px;
             }


            .asideinfo5::after{
            content:"";
            position:absolute;
            width:0px;
            height:3px;
            background:black;
            left:10;
            top:520px;
          
            transition: width 700ms ease;
            border-radius:10px;
            }
             .asideinfo5:hover::after{
             width:110px;
             }
             .mobinav{
             display:none}
             
        @media(min-width:200px) and (max-width:768px){
        .mobinav{
        display:block
        }
        .chiefepg{
        overflow-x:hidden;
        
        }
        .thycrads{
        height:28vh !important;
        }
        .chiefepgass{
         display: none;
        }

        .fcontents{
         grid-template-columns: repeat(1, 1fr);
         gap:60px;
          position:relative;
            left:-10px;
        
        }
            .secondcheife{
             position:relative;
            left:-10px;
            }
       table{
            grid-template-columns:repeat(1fr);
            gap:4px;
            overflow-x:scroll;
            overflow-y:hidden;
        }
        .belowtb{
        margin:-5px;
        
        }
       

            `
        }
    </style>
    <div className='flex chiefepg' >

    <div className=' bg-gray-50 px-[30px] chiefepgass'>
       
      <aside className='h-screen my-[40px]' >
        <h3  className='opacity-60'>Home</h3>
        <div>
            <div className='m-[30px] flex gap-[10px] asideinfo asideinfo1  p-[20px]'>

            <BrainIcon className='h-5 w-5'/>
            <p>Dashboard</p>
            </div>

            <div className='m-[30px] flex gap-[10px] asideinfo asideinfo2  p-[20px]'>
                <UtilityPole className='h-5 w-5'/>
                <p>LifeCycle</p>
            </div>
            <div className='m-[30px] flex gap-[10px] asideinfo asideinfo3 p-[20px]'>
                <ChartArea className='h-5 w-5'/>
                <p>Analytics</p>
            </div>
            <div className='m-[30px] flex gap-[10px] asideinfo asideinfo4 p-[20px]'>
                <FolderIcon className='h-5 w-5'/>
                <p>Projects</p>
            </div>
            <div className='m-[30px] flex gap-[10px] asideinfo asideinfo5 p-[20px]'>
                <PersonStanding className='h-5 w-5'/>
                <p>Teams</p>
            </div>
        </div>
        <div>
            <h3 className='opacity-60'>Documents</h3>
            <div>
                <div className='m-[30px] flex gap-[10px]'>
                    <Database className='h-5 w-5'/>
                    <p className='text-nowrap'>Data Library</p>
                </div>
                <div className='m-[30px] flex gap-[10px]'>
                    {/* <Dashboard className='h-5 w-5'/> */}
                    <p>Reports</p>
                </div>
                <div className='m-[30px] flex gap-[10px]'>
                    Word Assistant
                </div>
            </div>
        </div>
      </aside>
    </div>

    <div>
         <div className='mobinav'>
            {<Navbar/>}
        </div>
    <div className='grid grid-cols-4 gap-[15px] m-[50px] fcontents'>
        <Card className='border-[1px] border-gray-300 p-[5px] py-[30px] px-[10px] text-nowrap h-[25vh] thycrads'>
            <div className='flex relative left-[-20px]'>
            <CardContent>
                Total Revenue
            </CardContent>
            <CardContent className='flex'>
               <ArrowBigUpIcon  className='w-[20px]' />
               +12.5%
            </CardContent>
            </div>
            <CardHeader>
            <CardTitle className='text-[25px] font-bold relative left-[-20px]'>
                $1,250.00
            </CardTitle>
            </CardHeader>
            <CardDescription>
                <p className=' text-black'>
                Trending up this month 

                </p>
                <p>
                Visitors for the last 6 months

                </p>
            </CardDescription>
            
        </Card>
         <Card className='border-[1px] border-gray-300 p-[5px] py-[30px] px-[10px] text-nowrap h-[25vh] thycrads'>
            <div className='flex relative left-[-20px]'>
            <CardContent className='font-light opacity-50'>
                New Costumer's
            </CardContent>
            <CardContent className='flex'>
               <ArrowBigDown  className='w-[20px]' />
               -20%
            </CardContent>
            </div>
            <CardHeader>
            <CardTitle className='text-[25px] font-bold relative left-[-20px]'>
               1,234
            </CardTitle>
            </CardHeader>
            <CardDescription>
                <p className=' text-black'>
               Down 20% this period

                </p>
                <p>
               Acquisition needs attention

                </p>
            </CardDescription>
            
        </Card>

          <Card className='border-[1px] border-gray-300 p-[5px] py-[30px] px-[10px] text-nowrap h-[25vh] thycrads'>
            <div className='flex relative left-[-20px]'>
            <CardContent>
              Active Accounts
            </CardContent>
            <CardContent className='flex'>
               <ArrowBigUpIcon  className='w-[20px]' />
               +12.5%
            </CardContent>
            </div>
            <CardHeader>
            <CardTitle className='text-[25px] font-bold relative left-[-20px]'>
                45,678
            </CardTitle>
            </CardHeader>
            <CardDescription>
                <p className=' text-black'>
                Strong User retention

                </p>
                <p>
                Engagement exceeds targets

                </p>
            </CardDescription>
            
        </Card>

         <Card className='border-[1px] border-gray-300 p-[5px] py-[30px] px-[10px] text-nowrap h-[25vh] thycrads'>
            <div className='flex relative left-[-20px]'>
            <CardContent>
               Growth Rate
            </CardContent>
            <CardContent className='flex'>
               <ArrowBigUpIcon  className='w-[20px]' />
               +4.5%
            </CardContent>
            </div>
            <CardHeader>
            <CardTitle className='text-[25px] font-bold relative left-[-20px]'>
                4.5%
            </CardTitle>
            </CardHeader>
            <CardDescription>
                <p className=' text-black'>
                Steady performance increase

                </p>
                <p>
               meets growth projections

                </p>
            </CardDescription>
            
        </Card>
    </div>
    <div className="secondcheife">

    <div className='m-[50px]'>

        <ChartAreaInteractive/>

    </div>
    <div className='m-[50px] border-[2px] border-gray-300 p-[20px] rounded-lg'>
        <div>
            <table className='grid grid-cols-3 gap-[10px]'>
                <div className='m-[20px] belowtb'>
                <th className='relative left-3.5 amt'>Amount</th>
                 {status.map((s) => (
                    <div key={s.id} className='m-[20px] my-[20px] infotd p-[10px]'>
                    <td>{s.amount}</td>

                    </div>
                ))}
                </div>
                <div className='m-[20px] belowtb'>
                <th className='relative left-3.5'>Status</th>
                     {status.map((s) => (
                    <div key={s.id} className='m-[20px] my-[20px]  p-[10px]'>
                    <td>{s.status}</td>

                    </div>
                ))}
                </div>
                <div className='m-[20px] belowtb '>
                <th className='relative left-3.5'>Email</th>
                 {status.map((s) => (
                    <div key={s.id} className='m-[20px] my-[20px]  p-[10px]' >
                    <td >{s.email}</td>

                    </div>
                ))}
                </div>
               
            </table>
        </div>
    </div>

    </div>

    </div>

    </div>
    
    </>

  );
}