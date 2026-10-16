import {NextResponse} from 'next/server';
import {validateLead} from '@/lib/validation';
import {content} from '@/lib/content';
export async function POST(request:Request){
 if(request.headers.get('origin')&&request.headers.get('origin')!==new URL(request.url).origin)return NextResponse.json({error:content.errors.request},{status:403});
 try{const raw=await request.text();if(raw.length>4096)return NextResponse.json({error:content.errors.request},{status:413});const {lead,errors}=validateLead(JSON.parse(raw));if(Object.keys(errors).length)return NextResponse.json({errors},{status:400});const webhook=process.env.LEAD_WEBHOOK_URL;if(!webhook)return NextResponse.json({ok:true,forwarded:false});const response=await fetch(webhook,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(lead),signal:AbortSignal.timeout(10000)});if(!response.ok)return NextResponse.json({error:content.errors.request},{status:502});return NextResponse.json({ok:true});}catch{return NextResponse.json({error:content.errors.request},{status:400})}
}
