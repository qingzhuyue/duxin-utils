/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-02-25 11:24:10
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-02-25 11:24:11
 * @FilePath: /duxin-utils/utils/range.js
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
/**
 * 通过利用Array的内置方法，实现返回一个范围的数据
 * @param {*} start 
 * @param {*} end 
 * @returns 
 */
export const range = (start, end) => [...Array(end - start).keys()].map(item => item + start);