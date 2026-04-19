"use client";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import deleteProject from "@/lib/ProjectsActions/deleteProject";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import { RiImageEditFill } from "react-icons/ri";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

export default function DataTable({ projects }) {
  const router = useRouter();
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [selected, setSelected] = useState("");
  const removeProject = async (id) => {
    let data = await deleteProject(id);
    if (data.status === "success") {
      toast.success(data.message);
      router.refresh();
    }
  };

  const columns = [
    {
      field: "image",
      headerName: "Image",
      width: 200,
      renderCell: (params) => (
        <Image
          src={params?.value?.url}
          alt="project"
          width={150}
          height={150}
          style={{
            padding: 2,
            objectFit: "cover",
            borderRadius: "6px",
          }}
        />
      ),
    },
    { field: "title", headerName: "Title", width: 150 },
    { field: "slug", headerName: "slug", width: 280 },

    {
      field: "githubLink",
      headerName: "Github",
      width: 140,
      renderCell: (params) => (
        <Link href={params.value} target="_blank" rel="noreferrer">
          GitHub
        </Link>
      ),
    },
    {
      field: "liveLink",
      headerName: "Website",
      width: 140,
      renderCell: (params) => (
        <Link href={params.value} target="_blank" rel="noreferrer">
          Visit
        </Link>
      ),
    },
    {
      headerName: "Actions",
      field: "_id",
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      width: 200,
      renderCell: (params) => (
        <div className="flex gap-2 items-center justify-evenly w-full">
          <span
            className="flex justify-center items-center cursor-pointer hover:text-red-600 transation duration-300"
            onClick={() => {
              setSelected(params.value);
              setDeleteStatus(true);
            }}
          >
            <FaTrash size={20} />
          </span>
          <Link
            href={`/manage/edit/${params.value}`}
            className="flex justify-center items-center cursor-pointer"
          >
            <MdEdit size={20} />
          </Link>
        </div>
      ),
    },
  ];
  const paginationModel = { page: 0 };
  const rows = projects;

  return (
    <Paper sx={{ height: 530, width: "100%" }}>
      <DeleteModal
        open={deleteStatus}
        onClose={() => setDeleteStatus(false)}
        onConfirm={() => {
          removeProject(selected);
          setDeleteStatus(false);
        }}
      />
      <DataGrid
        rows={rows}
        rowHeight={70}
        rowSelection={false}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        getRowId={(row) => row._id}
        autoPageSize
        sx={{
          border: 0,
          "& .MuiDataGrid-cell": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          "& .MuiDataGrid-columnHeader": {
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      />
    </Paper>
  );
}
