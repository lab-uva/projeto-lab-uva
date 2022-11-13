package com.api.labuva.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateParsing {
    public static Date convertingStringToDate(String deliveryDate){
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd/MM/yyyy");
        Date date;
        try {
            date = simpleDateFormat.parse(deliveryDate);
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
        return date;
    }
}
