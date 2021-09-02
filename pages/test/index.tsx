import { PrismaClient } from '@prisma/client';
import DataTable from 'react-data-table-component';
import { useUser } from '@auth0/nextjs-auth0';



const columns = [
    {
        name: 'Job Number',
        selector: row => row.jobNumber,
        sortable: true,
    },
    {
        name: 'Community',
        selector: row => row.community,
        sortable: true,
    },
    {
      name: 'Lot Number',
      selector: row => row.lotNumber,
      sortable: true,
  },
  {
      name: 'Job Size',
      selector: row => row.jobSize,
      sortable: true,
  },
  ,
    {
        name: 'Installer',
        selector: row => row.installer,
        sortable: true,
    },
    {
      name: 'Date',
      selector: row => row.date,
      sortable: true,
  },
  {
      name: 'Notes',
      selector: row => row.notes,
      sortable: true,
  },
];



function Blog({ data }) {

  const processedData = []
  let tempData;

    data.map(item => {
      tempData = {...item};
      tempData.date = new Date(item.date).toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })
      processedData.push(tempData)
    }
    )

  return (
    <div>
      {/* <ul>
    {data.map(item =>
        <li key={item.id}>{ item.community}</li>
      )}
      </ul> */}
        <DataTable
            columns={columns}
            data={processedData}
            pagination 
            selectableRows
        />
      </div>
      )
    }
    
export async function getStaticProps() {
    
      const prisma = new PrismaClient()
      const entries = await prisma.entries.findMany(
        {
          where: {
            user_id: 9,
        }
        }
      )
      const data = JSON.parse(JSON.stringify(entries))


  return {
    props: {
      data
    },
  }
}

export default Blog