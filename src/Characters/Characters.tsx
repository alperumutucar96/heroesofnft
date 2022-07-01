import {useEffect, useState} from "react";
import {Table} from "antd";
import {ColumnsType} from "antd/es/table";

export type CharacterType = {
    image: string;
    name: string;
    description: string;
    id: number;
    attributes: [];
    character: string;
}

export function Characters(props: any) {
    const columns: ColumnsType<CharacterType> = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: text => <img
                height={100}
                alt="image"
                src={text}
            />,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: true,
            render: (name) => `${name}`
        },
        {
            title: 'Character',
            dataIndex: 'character',
            key: 'character',
            sorter: true,
            render: (character) => `${character}`
        },
        {
            title: 'ID',
            dataIndex: 'id',
            sorter: (a, b) => a.id - b.id,
            key: 'id',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        // {
        //     title: 'Attributes',
        //     dataIndex: 'attributes',
        //     key: 'attributes',
        //     render: (attributes) => attributes.map((attribute) =><p>{ attribute.value}</p>)
        // },
    ];
    useEffect(() => {

    })

    return (
        <div>
            <Table columns={columns}
                   pagination={{pageSize: 5}}
                   dataSource={props.data}/>
        </div>
    )
}