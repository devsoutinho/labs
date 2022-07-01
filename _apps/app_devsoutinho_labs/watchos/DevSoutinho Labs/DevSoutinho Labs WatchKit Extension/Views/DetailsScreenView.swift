//
//  DetailsScreenView.swift
//  DevSoutinho Labs WatchKit Extension
//
//  Created by Mario Souto on 01/07/22.
//  Ref: https://www.youtube.com/watch?v=DfWQV_NaS9I&list=PLwnphfuyBZiDslkTCQ2Mg0nF0Z8u9NPbl&index=6

import SwiftUI

struct DetailsScreenView: View {
    var loremText: String = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    @State private var text: String = "oi";

    
    var body: some View {
        ScrollView {
            VStack(alignment: .leading) {
                Text("I'm a details screen!")
                TextField("Insert your text", text: $text)
                Text("Output: \(text)")
                Text(loremText)
                    .padding(.vertical, 50.0)
            }
        }.navigationTitle("Details Screen")
            .navigationBarTitleDisplayMode(/*@START_MENU_TOKEN@*/.inline/*@END_MENU_TOKEN@*/)
    }
}

struct DetailsScreenView_Previews: PreviewProvider {
    static var previews: some View {
        DetailsScreenView()
    }
}
