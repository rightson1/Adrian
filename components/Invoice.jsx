import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        borderBottom: '1pt solid #000',
        paddingBottom: 10,
    },
    subheader: {
        fontSize: 16,
        marginBottom: 5,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    column: {
        flexGrow: 1,
    },
    item: {
        marginBottom: 5,
    },
    lineItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    total: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    footer: {
        marginTop: 20,
        borderTop: '1pt solid #000',
        paddingTop: 10,
    },
    thankYou: {
        textAlign: 'center',
        fontSize: 12,
        marginTop: 10,
    },
});

const pageWidth = 500 * (72 / 50);
const pageHeight = 500 * (72 / 50);

const ReceiptPdf = ({ receiptData }) => (
    <Document>
        <Page style={styles.page} size="A5">
            <View style={styles.container}>
                <Text style={styles.header}>Adrians Gym</Text>
                <Text style={styles.subheader}>Receipt</Text>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.item}>Receipt Number:</Text>
                        <Text>{receiptData.receiptNumber}</Text>
                        <Text style={styles.item}>Date:</Text>
                        <Text>{receiptData.date}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.item}>Member:</Text>
                        <Text>{receiptData.memberName}</Text>
                        <Text style={styles.item}>Email:</Text>
                        <Text>{receiptData.memberEmail}</Text>
                    </View>
                </View>
                <Text style={styles.item}>Subscription:</Text>
                <Text>{receiptData.subscriptionName}</Text>
                <View style={styles.lineItem}>
                    <Text>Amount:</Text>
                    <Text>{receiptData.amount} KES</Text>
                </View>
                <View style={styles.lineItem}>
                    <Text style={styles.total}>Total:</Text>
                    <Text style={styles.total}>{receiptData.amount} KES</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.thankYou}>Thank you for your business!</Text>
                </View>
            </View>
        </Page>
    </Document>
);
const Invoice = ({ receiptData }) => (
    <PDFViewer width="500px" height="500px">
        <ReceiptPdf receiptData={receiptData} />
    </PDFViewer>
);
export default Invoice;
