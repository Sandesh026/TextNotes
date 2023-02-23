import React from "react";
import { PageHeader, Card } from 'antd';


const Posts=(props)=> {
    return (
        <div className="posts_container">
            <div className="page_header_container">
                <PageHeader
                    style={{
                        border: '1px solid rgb(235, 237, 240)'
                    }}
                    title="Posts"

                />
            </div>
            <div className="articles_container">
                <div className="artical_container">
                    <Card
                        style={{ marginTop: 16 }}
                        type="inner"
                        title="Inner Card title"
                        extra={<a href="#">More</a>}
                    >
                        Inner Card content
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Posts;