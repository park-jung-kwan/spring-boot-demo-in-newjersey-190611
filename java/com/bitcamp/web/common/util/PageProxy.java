package com.bitcamp.web.common.util;

import java.util.Map;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class PageProxy {

    private int pageNum, pageSize, blockSize, startRow,
                endRow, startPage, endPage, prevBlock, nextBlock, totalCount;
    private String search;
    private boolean existPrev, existNext;

    public void execute(Map<?,?> paramMap){
        String _pageNum = (String)paramMap.get("page_num");
        pageNum = (_pageNum == null) ? 1 : Integer.parseInt(_pageNum);
        String _pageSize = (String)paramMap.get("page_size");
        pageSize = (_pageSize == null) ? 5 : Integer.parseInt(_pageSize);
        // blocksize 기본값 5

        //  totalCount =  DB 에 있는 테이블

        int nmg = totalCount % pageSize;
        int pageCount = (nmg == 0)? totalCount / pageSize : totalCount / pageSize + 1;

        // startRow

        // endRow
        
       
    }

}